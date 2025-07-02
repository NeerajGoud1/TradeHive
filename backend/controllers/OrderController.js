import { Order } from "../models/OrderSchema.js";
import { Holding } from "../models/HoldingSchema.js";
import { Position } from "../models/PositionsSchema.js";

import { getopenAndCurrValue } from "../utils/getLiveApiData.js";

const addOrder = async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;

    const [currPrice, openingPrice] = getopenAndCurrValue(name);

    if (mode === "BUY" && price * qty < currPrice * qty) {
      return res.status(400).json({
        message: "buy cannot be less than current market value",
      });
    }
    if (mode === "SELL" && price * qty > currPrice * qty) {
      return res.status(400).json({
        message: "Sell value cannot exceed current market value.",
      });
    }

    const net = ((currPrice - price) / price) * 100;
    const day = ((currPrice - openingPrice) / openingPrice) * 100;

    const newOrder = new Order({
      name,
      qty,
      price,
      mode,
      user: req.user._id,
    });
    // await newOrder.save();

    if (mode === "SELL") {
      const existingHolding = await Holding.findOne({
        name,
        user: req.user._id,
      });

      if (!existingHolding || existingHolding.qty < qty) {
        return res
          .status(500)
          .json({ message: "You don't have enough quantity to sell." });
      }

      existingHolding.qty -= qty;

      if (existingHolding.qty === 0) {
        await existingHolding.deleteOne();
      } else {
        await existingHolding.save();
      }

      await newOrder.save();
    } else {
      await newOrder.save();

      const newHolding = new Holding({
        name,
        qty,
        avg: price,
        price: currPrice,
        net: net.toFixed(2) + "%",
        day: day.toFixed(2) + "%",
        user: req.user._id,
      });
      await newHolding.save();
    }

    let position = await Position.findOne({ name, user: req.user._id });

    if (position) {
      const totalQty = mode === "BUY" ? position.qty + qty : position.qty - qty;

      if (totalQty < 0) {
        return res
          .status(500)
          .json({ message: "Position quantity cannot be negative." });
      }

      if (mode === "BUY") {
        const totalValue = position.avg * position.qty + price * qty;
        position.avg = totalValue / totalQty;
      }

      position.qty = totalQty;
      position.price = currPrice;
      const netPct = ((currPrice - position.avg) / position.avg) * 100;
      position.net = netPct.toFixed(2) + "%";
      position.day = day.toFixed(2) + "%";
      position.isLoss = currPrice < position.avg;

      if (totalQty === 0) {
        await position.deleteOne();
      } else {
        await position.save();
      }
    } else if (mode === "BUY") {
      const newPosition = new Position({
        product: mode,
        name,
        qty,
        avg: price,
        price: currPrice,
        net: net.toFixed(2) + "%",
        day: day.toFixed(2) + "%",
        isLoss: currPrice < price,
        user: req.user._id,
      });
      await newPosition.save();
    }

    res
      .status(200)
      .json("Order placed, new Holding created, Positions updated.");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error. Could not place order." });
  }
};

const getOrders = async (req, res) => {
  try {
    const data = await Order.find({ user: req.user._id });
    res.json(data);
  } catch (e) {
    res.json({ error: e.message });
  }
};
export { addOrder, getOrders };

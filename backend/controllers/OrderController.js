import { Order } from "../models/OrderSchema.js";
import { Holding } from "../models/HoldingSchema.js";
import { Position } from "../models/PositionsSchema.js";

import { getopenAndCurrValue } from "../utils/getLiveApiData.js";

const addOrder = async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;

    const [currPrice, openingPrice] = getopenAndCurrValue(name);

    const net = ((currPrice - price) / price) * 100;
    const day = ((currPrice - openingPrice) / openingPrice) * 100;

    const newOrder = new Order({
      name,
      qty,
      price,
      mode,
      user: req.user._id,
    });
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

    let position = await Position.findOne({ name });

    if (position) {
      const totalQty = position.qty + qty;
      const totalValue = position.avg * position.qty + price * qty;
      position.qty = totalQty;
      position.avg = totalValue / totalQty;
      position.price = currPrice;
      position.net = net.toFixed(2) + "%";
      position.day = day.toFixed(2) + "%";
      position.isLoss = currPrice < position.avg;
      await position.save();
    } else {
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
    res.json("Order placed, new Holding created, Positions updated.");
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

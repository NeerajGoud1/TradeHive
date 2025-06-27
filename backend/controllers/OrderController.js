import { Order } from "../models/OrderSchema.js";
import { Holding } from "../models/HoldingSchema.js";

import { getopenAndCurrValue } from "../utils/getLiveApiData.js";
const addOrder = async (req, res) => {
  const data = req.body;
  let newOrder = new Order({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  let liveData = getopenAndCurrValue(data.name);
  let avg = req.body.price;
  let currPrice = liveData[0];
  let openingPrice = liveData[1];
  const net = ((currPrice - avg) / avg) * 100;
  const day = ((currPrice - openingPrice) / openingPrice) * 100;

  let newHolding = new Holding({
    name: req.body.name,
    qty: req.body.qty,
    avg: avg,
    price: currPrice,
    net: net.toFixed(2) + "%",
    day: day.toFixed(2) + "%",
  });

  await newOrder.save();

  await newHolding.save();

  res.json("order placed");
};

const getOrders = async (req, res) => {
  try {
    let data = await Order.find();
    res.json(data);
  } catch (e) {
    res.json({ error: e.message });
  }
};
export { addOrder, getOrders };

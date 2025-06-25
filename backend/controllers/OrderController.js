import { Order } from "../models/OrderSchema.js";

const addOrder = async (req, res) => {
  let newOrder = new Order({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  await newOrder.save();

  res.json("order placed");
};

export { addOrder };

import { Schema, model } from "mongoose";

const OrderSchema = new Schema({
  name: String,
  qty: Number,
  price: Number,
  mode: String,
  user: {
    type: String,
    required: true,
  },
});

const Order = model("order", OrderSchema);

export { Order };

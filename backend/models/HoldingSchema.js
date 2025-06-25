import { Schema, model } from "mongoose";

const HoldingSchema = new Schema({
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  net: String,
  day: String,
});

const Holding = model("holding", HoldingSchema);
export { Holding };

import { Schema, model } from "mongoose";

const HoldingSchema = new Schema({
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  net: String,
  day: String,
  user: {
    type: String,
    required: true,
  },
});

const Holding = model("holding", HoldingSchema);
export { Holding };

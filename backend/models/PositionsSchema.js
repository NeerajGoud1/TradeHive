import { Schema, model } from "mongoose";

const PositionsSchema = new Schema({
  product: String,
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  net: String,
  day: String,
  isLoss: Boolean,
  user: {
    type: String,
    required: true,
  },
});

const Position = model("position", PositionsSchema);
export { Position };

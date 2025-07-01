import { Schema, model } from "mongoose";
import { User } from "./userSchema.js";

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
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Position = model("position", PositionsSchema);
export { Position };

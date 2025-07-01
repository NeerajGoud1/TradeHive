import { Schema, model } from "mongoose";

const HoldingSchema = new Schema({
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  net: String,
  day: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Holding = model("holding", HoldingSchema);
export { Holding };

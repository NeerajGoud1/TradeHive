import { Schema, model } from "mongoose";

const OrderSchema = new Schema({
  name: String,
  qty: Number,
  price: Number,
  mode: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Order = model("order", OrderSchema);

export { Order };

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import HoldingRouter from "./routes/HoldingRoutes.js";
import { Holding } from "./models/HoldingSchema.js";

import cors from "cors";
import bodyParser from "body-parser";
import { Position } from "./models/PositionsSchema.js";
import { Order } from "./models/OrderSchema.js";

import PositionRouter from "./routes/PositionsRoutes.js";
import OrderRouter from "./routes/OrderRoutes.js";
import UserRouter from "./routes/userRoutes.js";
import { verify } from "./utils/Auth.js";
import { User } from "./models/userSchema.js";
import { authenticate } from "./utils/Auth.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());
const PORT = process.env.PORT || 3002;
const DATABASE = process.env.MONGO_URL;

app.get("/getuserdata", authenticate, async (req, res) => {
  const data = await User.findById(req.user._id);
  console.log(data);
  res.json(data);
});

app.get("/api/verify", verify);

app.use("/api", HoldingRouter);
app.use("/api", PositionRouter);
app.use("/api", OrderRouter);
app.use("/user", UserRouter);

async function start() {
  await mongoose.connect(DATABASE);
  console.log("Successfully Connected to DB");
}

start();

app.listen(PORT, () => {
  console.log("Server is listening at port 8080");
});

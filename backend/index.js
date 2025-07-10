import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import HoldingRouter from "./routes/HoldingRoutes.js";

import cors from "cors";
import bodyParser from "body-parser";

import PositionRouter from "./routes/PositionsRoutes.js";
import OrderRouter from "./routes/OrderRoutes.js";
import { verify } from "./utils/Auth.js";
import { authenticate } from "./utils/Auth.js";

///
import admin from "firebase-admin";
const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
///

const app = express();
app.use(cors());
app.use(bodyParser.json());
const PORT = process.env.PORT || 3002;
const DATABASE = process.env.MONGO_URL;

app.get("/getuserdata", authenticate, async (req, res) => {
  const data = req.user;
  console.log(data);
  res.json(data);
});

app.get("/api/verify", verify);

app.use("/api", HoldingRouter);
app.use("/api", PositionRouter);
app.use("/api", OrderRouter);

async function start() {
  await mongoose.connect(DATABASE);
  console.log("Successfully Connected to DB");
}

start();

app.listen(PORT, () => {
  console.log("Server is listening at port 8080");
});

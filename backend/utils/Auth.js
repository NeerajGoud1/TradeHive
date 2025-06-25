import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";

import { User } from "../models/userSchema";

export const authenticate = async (req, res) => {
  const token = req.headers["authorization"].split(" ")[1];

  if (!token) {
    return res.json.status(401)({ message: "Invalid User!" });
  }

  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      return res.status(401).josn({ message: "Invalid User!" });
    }
    try {
      const user = await User.findById(data.id);
      if (!user) {
        return res.status(404).json({ message: "User not found!" });
      }
      req.user = user;
      next();
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  });
};

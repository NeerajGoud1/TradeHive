import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";

import { User } from "../models/userSchema.js";

export const authenticate = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No token provided!" });
    }

    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.TOKEN_KEY, async (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: "Invalid or expired token!" });
      }
      const user = await User.findById(decoded.id);
      if (!user) {
        return res.status(404).json({ message: "User not found!" });
      }
      req.user = user;
      next();
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const verify = async (req, res) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "No token provided" });
  }

  const token = authHeader.split(" ")[1];

  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token!" });
    }

    try {
      const user = await User.findById(data.id);
      if (!user) {
        return res.status(404).json({ message: "User not found!" });
      }

      return res.status(200).json({
        message: "Token is valid",
        user: {
          id: user._id,
          username: user.username,
          email: user.email,
        },
      });
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  });
};

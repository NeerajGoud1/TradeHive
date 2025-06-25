import { User } from "../models/userSchema.js";
import { createSecretToken } from "../utils/SecretToken.js";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
dotenv.config();

export const register = async (req, res) => {
  try {
    let { username, password, email } = req.body;
    let oldUser = await User.findOne({ email });

    if (oldUser) {
      res.json({ message: "user already exist!" });
      return;
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      email: email,
      username: username,
      password: hashPassword,
    });
    await newUser.save();

    const token = createSecretToken(newUser._id);
    console.log("User successfully created ! token sent to client");
    res.status(200).json({ message: token });
  } catch (e) {
    console.log("error in registering : ", e.message);
    res.json({ message: e.message });
  }
};

export const login = async (req, res) => {
  try {
    let { email, password } = req.body;

    if (!email || !password) {
      return res.json({ message: "please provide all details " });
    }

    let user = await User.findOne({ email });
    if (!user) {
      res.json({ message: "Invalid email and password !" });
      return;
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      console.log("your password is incorrect!");
      res.status(404).json({ message: "incorrect password" });
      return;
    }
    const token = createSecretToken(user._id);
    console.log("User successfully loggedIn");
    res.json({ message: token });
  } catch (e) {
    console.log("error in login", e.message);

    res.json({ message: e.message });
  }
};

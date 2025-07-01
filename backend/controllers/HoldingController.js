import { Holding } from "../models/HoldingSchema.js";

const getHoldings = async (req, res) => {
  try {
    const data = await Holding.find({ user: req.user._id });
    res.json(data);
  } catch (e) {
    res.json({ error: e.message });
  }
};

export { getHoldings };

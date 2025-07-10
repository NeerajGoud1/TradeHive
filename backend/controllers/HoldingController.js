import { Holding } from "../models/HoldingSchema.js";

const getHoldings = async (req, res) => {
  try {
    const data = await Holding.find({ user: req.userId });
    console.log("got ", data);
    res.json(data);
  } catch (e) {
    res.json({ error: e.message });
    console.log("error", e.message);
  }
};

export { getHoldings };

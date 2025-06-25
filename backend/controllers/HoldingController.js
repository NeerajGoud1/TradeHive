import { Holding } from "../models/HoldingSchema.js";

const getHoldings = async (req, res) => {
  try {
    let data = await Holding.find();
    res.json(data);
  } catch (e) {
    res.json({ error: e.message });
  }
};

export { getHoldings };

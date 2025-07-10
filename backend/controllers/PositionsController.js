import { Position } from "../models/PositionsSchema.js";

const getPositions = async (req, res) => {
  try {
    const data = await Position.find({ user: req.userId });
    res.json(data);
  } catch (e) {
    res.json({ error: e.message });
  }
};

export { getPositions };

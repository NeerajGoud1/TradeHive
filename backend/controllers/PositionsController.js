import { Position } from "../models/PositionsSchema.js";

const getPositions = async (req, res) => {
  try {
    let data = await Position.find({});
    res.json(data);
  } catch (e) {
    res.json({ error: e.message });
  }
};

export { getPositions };

import { getPositions } from "../controllers/PositionsController.js";

import { Router } from "express";

const router = Router();

router.get("/positions", getPositions);

export default router;

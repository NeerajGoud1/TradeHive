import { getPositions } from "../controllers/PositionsController.js";

import { Router } from "express";
import { authenticate } from "../utils/Auth.js";

const router = Router();

router.get("/positions", authenticate, getPositions);

export default router;

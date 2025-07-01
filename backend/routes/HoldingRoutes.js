import { getHoldings } from "../controllers/HoldingController.js";

import { Router } from "express";
import { authenticate } from "../utils/Auth.js";

const router = Router();

router.get("/holdings", authenticate, getHoldings);

export default router;

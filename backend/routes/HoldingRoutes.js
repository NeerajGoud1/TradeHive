import { getHoldings } from "../controllers/HoldingController.js";

import { Router } from "express";

const router = Router();

router.get("/holdings", getHoldings);

export default router;

import { addOrder } from "../controllers/OrderController.js";

import { Router } from "express";

const router = Router();

router.post("/newOrder", addOrder);

export default router;

import { addOrder, getOrders } from "../controllers/OrderController.js";

import { Router } from "express";

const router = Router();

router.post("/newOrder", addOrder);
router.get("/orders", getOrders);

export default router;

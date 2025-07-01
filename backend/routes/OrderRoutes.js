import { addOrder, getOrders } from "../controllers/OrderController.js";

import { Router } from "express";
import { authenticate } from "../utils/Auth.js";

const router = Router();

router.post("/newOrder", authenticate, addOrder);
router.get("/orders", authenticate, getOrders);

export default router;

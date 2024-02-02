import { Router } from "express";
import { getAllOrders,getAllOrderAnalytics } from "../controllers/order";
const router = Router();
router.get("/",getAllOrders);
router.get("/analytics",getAllOrderAnalytics);
export default router;
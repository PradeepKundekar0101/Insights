import { Router } from "express";
import { getAllCartItems,getAllCartItemsAnalytics } from "../controllers/cart";
const router = Router();
router.get("/",getAllCartItems);
router.get("/analytics",getAllCartItemsAnalytics);
export default router;
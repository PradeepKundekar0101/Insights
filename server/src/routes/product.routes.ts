import { Router } from "express";
import { getAllProducts,getProductAnalytics } from "../controllers/product";
const router = Router();
router.get("/",getAllProducts);
router.get("/analytics",getProductAnalytics);
export default router;
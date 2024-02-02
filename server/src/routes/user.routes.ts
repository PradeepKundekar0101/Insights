import { Router } from "express";
import { getAllUsers,getUserAnalytics } from "../controllers/user";
const router = Router();
router.get("/",getAllUsers);
router.get("/analytics",getUserAnalytics);
export default router;
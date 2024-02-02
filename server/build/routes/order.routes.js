"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const order_1 = require("../controllers/order");
const router = (0, express_1.Router)();
router.get("/", order_1.getAllOrders);
router.get("/analytics", order_1.getAllOrderAnalytics);
exports.default = router;

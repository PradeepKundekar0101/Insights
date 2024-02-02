"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cart_1 = require("../controllers/cart");
const router = (0, express_1.Router)();
router.get("/", cart_1.getAllCartItems);
router.get("/analytics", cart_1.getAllCartItemsAnalytics);
exports.default = router;

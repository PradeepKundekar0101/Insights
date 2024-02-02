"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_1 = require("../controllers/product");
const router = (0, express_1.Router)();
router.get("/", product_1.getAllProducts);
router.get("/analytics", product_1.getProductAnalytics);
exports.default = router;

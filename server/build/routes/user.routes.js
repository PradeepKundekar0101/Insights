"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("../controllers/user");
const router = (0, express_1.Router)();
router.get("/", user_1.getAllUsers);
router.get("/analytics", user_1.getUserAnalytics);
exports.default = router;

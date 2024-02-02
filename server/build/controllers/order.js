"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllOrderAnalytics = exports.getAllOrders = void 0;
const asyncHandler_1 = require("../utils/asyncHandler");
const order_1 = __importDefault(require("../models/order"));
const ApiResponse_1 = require("../utils/ApiResponse");
exports.getAllOrders = (0, asyncHandler_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const orders = yield order_1.default.find();
    return res.status(200).json(new ApiResponse_1.ApiResponse(200, "carts", orders, true));
}));
exports.getAllOrderAnalytics = (0, asyncHandler_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const orders = yield order_1.default.find();
    return res.status(200).json(new ApiResponse_1.ApiResponse(200, "carts", orders, true));
}));

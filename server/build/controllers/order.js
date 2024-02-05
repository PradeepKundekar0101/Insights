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
const order_2 = __importDefault(require("../models/order"));
const user_1 = __importDefault(require("../models/user"));
exports.getAllOrders = (0, asyncHandler_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const orders = yield order_1.default.find();
    return res.status(200).json(new ApiResponse_1.ApiResponse(200, "carts", orders, true));
}));
exports.getAllOrderAnalytics = (0, asyncHandler_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const totalSales = yield order_2.default.aggregate([
        {
            $group: {
                _id: null,
                totalSales: {
                    $sum: "$total",
                },
            },
        },
    ]);
    const totalDiscountedSales = yield order_2.default.aggregate([
        {
            $group: {
                _id: null,
                totalDiscountedSales: {
                    $sum: "$discountedTotal",
                },
            },
        },
    ]);
    const totalOrders = yield order_2.default.aggregate([
        {
            $group: {
                _id: null,
                totalOrders: {
                    $sum: 1,
                },
            },
        },
    ]);
    const averageOrderValue = yield order_2.default.aggregate([
        {
            $group: {
                _id: null,
                averageOrderValue: {
                    $avg: "$total",
                },
            },
        },
    ]);
    const totalUniqueOrders = yield order_2.default.aggregate([
        {
            $group: {
                _id: "$userId",
            },
        },
        {
            $count: "totalUniqueOrders",
        },
    ]);
    const totalUsers = yield user_1.default.countDocuments();
    const salesPerProduct = yield order_2.default.aggregate([
        {
            $unwind: "$products",
        },
        {
            $group: {
                _id: "$products.id",
                totalSales: {
                    $sum: "$total",
                },
                title: {
                    $first: "$products.title",
                },
            },
        },
        {
            $sort: {
                totalSales: 1,
            },
        },
    ]);
    const monthWiseSales = yield order_2.default.aggregate([
        {
            $group: {
                _id: {
                    year: { $year: "$date" },
                    month: {
                        $month: "$date"
                    }
                },
                totalSales: { $sum: "$total" },
            }
        }, {
            $group: {
                _id: "$_id.year",
                sales: {
                    $push: { k: "$_id.month", v: "$totalSales" }
                }
            }
        }
    ]);
    const analytics = {
        totalSales: totalSales[0].totalSales,
        totalDiscountedSales: totalDiscountedSales[0].totalDiscountedSales,
        totalOrders: totalOrders[0].totalOrders,
        averageOrderValue: averageOrderValue[0].averageOrderValue,
        conversionRate: (totalUniqueOrders[0].totalUniqueOrders / totalUsers) * 100,
        salesPerProduct,
        monthWiseSales,
    };
    return res
        .status(200)
        .json(new ApiResponse_1.ApiResponse(200, "carts", Object.assign(Object.assign({}, analytics), { netSales: analytics.totalSales - analytics.totalDiscountedSales }), true));
}));

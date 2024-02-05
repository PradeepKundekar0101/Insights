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
exports.getProductAnalytics = exports.getAllProducts = void 0;
const asyncHandler_1 = require("../utils/asyncHandler");
const product_1 = __importDefault(require("../models/product"));
const ApiResponse_1 = require("../utils/ApiResponse");
const order_1 = __importDefault(require("../models/order"));
exports.getAllProducts = (0, asyncHandler_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield product_1.default.find();
    return res.status(200).json(new ApiResponse_1.ApiResponse(200, "users", products, true));
}));
exports.getProductAnalytics = (0, asyncHandler_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const topFiveSellingProducts = yield order_1.default.aggregate([
        {
            $unwind: "$products"
        },
        {
            $group: {
                _id: "$products.id",
                totalSales: {
                    $sum: "$total",
                },
                title: {
                    $first: "$products.title"
                },
                thumbnail: {
                    $first: "$products.thumbnail"
                }
            }
        },
        {
            $sort: {
                "totalSales": -1
            }
        },
        {
            $limit: 5
        }
    ]);
    const productsByStocks = yield product_1.default.aggregate([
        {
            $project: {
                stock: 1,
                title: 1,
                thumbnail: 1
            }
        }
    ]);
    const totalProducts = yield product_1.default.countDocuments();
    const totalCategories = yield product_1.default.aggregate([{
            $group: {
                _id: "$category"
            },
        }, {
            $count: "totalCategories"
        }]);
    const averageRating = yield product_1.default.aggregate([
        {
            $group: {
                _id: null,
                averageRating: {
                    $avg: "$rating"
                }
            }
        }
    ]);
    const analytics = {
        topFiveSellingProducts,
        productsByStocks,
        totalProducts,
        totalCategories: totalCategories[0].totalCategories,
        averageRating: averageRating[0].averageRating
    };
    return res.status(200).json(new ApiResponse_1.ApiResponse(200, "Product analytics", analytics, true));
}));

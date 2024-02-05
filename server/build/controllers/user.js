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
exports.getUserAnalytics = exports.getAllUsers = void 0;
const asyncHandler_1 = require("../utils/asyncHandler");
const user_1 = __importDefault(require("../models/user"));
const ApiResponse_1 = require("../utils/ApiResponse");
// import aggregrationPipe from "../services/pipelines/userAnalytics";
exports.getAllUsers = (0, asyncHandler_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_1.default.find().select("firstName lastName email phone image age gender");
    return res.status(200).json(new ApiResponse_1.ApiResponse(200, "users", users, true));
}));
exports.getUserAnalytics = (0, asyncHandler_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const totalUsers = yield user_1.default.countDocuments();
    const genderDistribution = yield user_1.default.aggregate([
        {
            $group: {
                _id: "$gender",
                count: {
                    $sum: 1
                }
            }
        }
    ]);
    const ageDistribution = yield user_1.default.aggregate([
        { $group: {
                _id: "$age",
                count: {
                    $sum: 1
                }
            } }
    ]);
    const averageAge = yield user_1.default.aggregate([
        { $group: {
                _id: null,
                data: {
                    $avg: "$age"
                }
            } }
    ]);
    return res.status(200).json(new ApiResponse_1.ApiResponse(200, "users", { totalUsers, genderDistribution, ageDistribution, averageAge: averageAge[0].data }, true));
}));

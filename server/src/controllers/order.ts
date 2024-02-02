import { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import CartItem from "../models/order";
import { ApiResponse } from "../utils/ApiResponse";

export const getAllOrders = asyncHandler(async(req:Request,res:Response)=>{
    const orders = await CartItem.find();
    return res.status(200).json(new ApiResponse(200,"carts",orders,true));
})

export const getAllOrderAnalytics = asyncHandler(async(req:Request,res:Response)=>{
    const orders = await CartItem.find();
    return res.status(200).json(new ApiResponse(200,"carts",orders,true));
})
import { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import CartItem from "../models/cart";
import { ApiResponse } from "../utils/ApiResponse";

export const getAllCartItems = asyncHandler(async(req:Request,res:Response)=>{
    const carts = await CartItem.find();
    return res.status(200).json(new ApiResponse(200,"carts",carts,true));
})

export const getAllCartItemsAnalytics = asyncHandler(async(req:Request,res:Response)=>{
    const carts = await CartItem.find();
    return res.status(200).json(new ApiResponse(200,"carts",carts,true));
})
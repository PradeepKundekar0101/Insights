import { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";

import Product from "../models/product";
import { ApiResponse } from "../utils/ApiResponse";

export const getAllProducts = asyncHandler(async(req:Request,res:Response)=>{
    const products = await Product.find();
    return res.status(200).json(new ApiResponse(200,"users",products,true));
})

export const getProductAnalytics = asyncHandler(async(req:Request,res:Response)=>{
    const products = await Product.find();
    return res.status(200).json(new ApiResponse(200,"users",products,true));
})
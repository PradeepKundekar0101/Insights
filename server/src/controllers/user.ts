import { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import User from "../models/user";
import { ApiResponse } from "../utils/ApiResponse";

export const getAllUsers = asyncHandler(async(req:Request,res:Response)=>{
    const users = await User.find();
    return res.status(200).json(new ApiResponse(200,"users",users,true));
})

export const getUserAnalytics = asyncHandler(async(req:Request,res:Response)=>{
    const users = await User.find();
    return res.status(200).json(new ApiResponse(200,"users",users,true));
})
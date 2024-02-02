import { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import User from "../models/user";
import { ApiResponse } from "../utils/ApiResponse";
// import aggregrationPipe from "../services/pipelines/userAnalytics";

export const getAllUsers = asyncHandler(async(req:Request,res:Response)=>{
    const users = await User.find();
    return res.status(200).json(new ApiResponse(200,"users",users,true));
})

export const getUserAnalytics = asyncHandler(async(req:Request,res:Response)=>{
    const totalUsers = await User.countDocuments();
    const genderDistribution = await User.aggregate([
        {
            $group:{
                _id:"$gender",
                count:{
                    $sum:1
                }
            }
        }
    ]);
    const ageDistribution = await User.aggregate([
        {$group:{
            _id:"$age",
            count:{
                $sum:1
            }
        }}
    ]);
    const averageAge = await User.aggregate([
        {$group:{
            _id:null,
            data:{
                $avg:"$age"
            }
        }}
    ])
    return res.status(200).json(new ApiResponse(200,"users",{totalUsers,genderDistribution,ageDistribution,averageAge},true));
})
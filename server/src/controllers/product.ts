import { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";

import Product from "../models/product";
import { ApiResponse } from "../utils/ApiResponse";
import Order from "../models/order";

export const getAllProducts = asyncHandler(async(req:Request,res:Response)=>{
    const products = await Product.find();
    return res.status(200).json(new ApiResponse(200,"users",products,true));
})

export const getProductAnalytics = asyncHandler(async(req:Request,res:Response)=>{
    const topFiveSellingProducts =  await Order.aggregate([
        {
          $unwind: "$products"
          },
        {
          $group: {
            _id: "$products.id",
            totalSales: {
              $sum:"$total",
            },
             title: {
              $first: "$products.title"
            },
              thumbnail:{
                $first:"$products.thumbnail"
              }
          }
          },
        {
          $sort: {
            "totalSales": -1
          }
        },
        {
            $limit:5
        }
      ])
      const productsByStocks = await Product.aggregate([
        {
          $project: {
            stock:1,
            title:1,
            thumbnail:1
          }
          }
      ])
      const totalProducts = await Product.countDocuments();
      const totalCategories = await Product.aggregate([{
        $group:{
            _id:"$category"
        },       
      },{
        $count:"totalCategories"
      }]);
      const analytics = {
        topFiveSellingProducts,
        productsByStocks,
        totalProducts,
        totalCategories:totalCategories[0].totalCategories
      }
    return res.status(200).json(new ApiResponse(200,"Product analytics",analytics,true));
})
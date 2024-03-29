import { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import CartItem from "../models/order";
import { ApiResponse } from "../utils/ApiResponse";
import Order from "../models/order";
import User from "../models/user";

export const getAllOrders = asyncHandler(
  async (req: Request, res: Response) => {
    const orders = await CartItem.find();
    return res.status(200).json(new ApiResponse(200, "carts", orders, true));
  }
);

export const getAllOrderAnalytics = asyncHandler(
  async (req: Request, res: Response) => {
    const totalSales = await Order.aggregate([
      {
        $group: {
          _id: null,
          totalSales: {
            $sum: "$total",
          },
        },
      },
    ]);
    const totalDiscountedSales = await Order.aggregate([
      {
        $group: {
          _id: null,
          totalDiscountedSales: {
            $sum: "$discountedTotal",
          },
        },
      },
    ]);
    const totalOrders = await Order.aggregate([
      {
        $group: {
          _id: null,
          totalOrders: {
            $sum: 1,
          },
        },
      },
    ]);
    const averageOrderValue = await Order.aggregate([
      {
        $group: {
          _id: null,
          averageOrderValue: {
            $avg: "$total",
          },
        },
      },
    ]);
    const totalUniqueOrders = await Order.aggregate([
      {
        $group: {
          _id: "$userId",
        },
      },
      {
        $count: "totalUniqueOrders",
      },
    ]);
    const totalUsers = await User.countDocuments();
    const salesPerProduct = await Order.aggregate([
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
    let monthWiseSales = await Order.aggregate([
      {
        $group: {
          _id: {
           year:{$year: "$date"},
           month:{
            $month:"$date"}
          },
          totalSales: { $sum: "$total" },
        }
      },
      {
        $addFields:{
          month:"$_id.month"
        }
      },
      {
        $sort:{
          month:1
        }
      }
      ,{
        $group:{
          _id:"$_id.year",
          sales:{
            $push:{k:"$month",v:"$totalSales"}
          }
        }
      },
     
    ]);
    // Add missing months
    monthWiseSales.map((year) => {
      let cur = 1;
      while (cur <= 12) {
        if (!year.sales.find((e:any) => e.k === cur)) {
          year.sales.push({ k: cur, v: 0 });
        }
        cur++;
      }
      year.sales.sort((a:any, b:any) => a.k - b.k);
    });
    const analytics = {
      totalSales: totalSales[0].totalSales,
      totalDiscountedSales: totalDiscountedSales[0].totalDiscountedSales,
      totalOrders: totalOrders[0].totalOrders,
      averageOrderValue: averageOrderValue[0].averageOrderValue,
      conversionRate:
        (totalUniqueOrders[0].totalUniqueOrders / totalUsers) * 100,
      salesPerProduct,
      monthWiseSales,
    };
    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          "carts",
          {
            ...analytics,
            netSales: analytics.totalSales - analytics.totalDiscountedSales,
          },
          true
        )
      );
  }
);

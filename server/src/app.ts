import cors from 'cors';
import express, { Request, Response } from 'express';
import User from './models/user';
import Product from './models/product';
import CartItem from './models/cart';

const app = express();
app.use(cors({origin: "*" }));
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
app.use(express.json());

// app.use('/api/v1/analytics/products',productRoutes);
// Unhandled Routes:
app.all("*", (req, res, next) => {
    res.status(404).json({
      status: "fail",
      message: `Can't find ${req.originalUrl} on this server`,
    });
  });

export {app};

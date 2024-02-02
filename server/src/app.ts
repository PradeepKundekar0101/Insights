import cors from 'cors';
import express, { Request, Response } from 'express';
import userRoutes from './routes/user.routes'
import productRoutes from './routes/product.routes';
import cartRoutes from './routes/cart.routes';
const app = express();
app.use(cors({origin: "*" }));
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
app.use(express.json());

app.use('/api/v1/users',userRoutes);
app.use('/api/v1/products',productRoutes);
app.use('/api/v1/cart',cartRoutes);

app.all("*", (req, res, next) => {
    res.status(404).json({
      status: "fail",
      message: `Can't find ${req.originalUrl} on this server`,
    });
  });

export {app};

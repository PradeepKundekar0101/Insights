import { app } from './app';
import dotenv from 'dotenv'
import {connectDB} from './db'
import User from './models/user';
import Product from './models/product';
import Order from './models/order';

dotenv.config();

const PORT = process.env.PORT || 8000;
connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("Server running at PORT "+PORT);
    })
}).catch((error)=>{
    console.log(error.message)
})


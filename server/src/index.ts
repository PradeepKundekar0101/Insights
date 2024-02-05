import { app } from './app';
import dotenv from 'dotenv'
import {connectDB} from './db'
import User from './models/user';
import Product from './models/product';
import Order from './models/order';

dotenv.config();
function getRandomDate(start:Date, end:Date) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }
  
const addDates = async()=>{
    // const startDate = new Date('2022-01-01');  // Adjust the start date as needed
    // const endDate = new Date(); 
    // const allOrders = await Order.find();
    // for(let order of allOrders){
    //     order.date=getRandomDate(startDate, endDate);
    //     await order.save();
    // }
    // console.log("Added dates")
    const res = await Order.findByIdAndUpdate("65bd2bc5aa58941f44ed7d58",{userId:100});
    console.log("updated");
}
// addDates();
const PORT = process.env.PORT || 8000;
connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("Server running at PORT "+PORT);
    })
}).catch((error)=>{
    console.log(error.message)
})


"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = require("./db");
const order_1 = __importDefault(require("./models/order"));
dotenv_1.default.config();
function getRandomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}
const addDates = () => __awaiter(void 0, void 0, void 0, function* () {
    // const startDate = new Date('2022-01-01');  // Adjust the start date as needed
    // const endDate = new Date(); 
    // const allOrders = await Order.find();
    // for(let order of allOrders){
    //     order.date=getRandomDate(startDate, endDate);
    //     await order.save();
    // }
    // console.log("Added dates")
    const res = yield order_1.default.findByIdAndUpdate("65bd2bc5aa58941f44ed7d58", { userId: 100 });
    console.log("updated");
});
// addDates();
const PORT = process.env.PORT || 8000;
(0, db_1.connectDB)().then(() => {
    app_1.app.listen(PORT, () => {
        console.log("Server running at PORT " + PORT);
    });
}).catch((error) => {
    console.log(error.message);
});

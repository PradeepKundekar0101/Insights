"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const OrderSchema = new mongoose_1.Schema({
    id: { type: Number, required: true },
    products: [
        {
            id: { type: Number, required: true },
            title: { type: String, required: true },
            price: { type: Number, required: true },
            quantity: { type: Number, required: true },
            total: { type: Number, required: true },
            discountPercentage: { type: Number, required: true },
            discountedPrice: { type: Number, required: true },
            thumbnail: { type: String, required: true },
        },
    ],
    total: { type: Number, required: true },
    discountedTotal: { type: Number, required: true },
    userId: { type: Number, required: true },
    totalProducts: { type: Number, required: true },
    totalQuantity: { type: Number, required: true },
});
const Order = (0, mongoose_1.model)('Order', OrderSchema);
exports.default = Order;

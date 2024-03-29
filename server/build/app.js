"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const product_routes_1 = __importDefault(require("./routes/product.routes"));
const order_routes_1 = __importDefault(require("./routes/order.routes"));
const app = (0, express_1.default)();
exports.app = app;
app.use((0, cors_1.default)({ origin: "*" }));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
app.use('/api/v1/users', user_routes_1.default);
app.use('/api/v1/products', product_routes_1.default);
app.use('/api/v1/orders', order_routes_1.default);
app.all("*", (req, res, next) => {
    res.status(404).json({
        status: "fail",
        message: `Can't find ${req.originalUrl} on this server`,
    });
});

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Middlewares_1 = require("./Middlewares");
const port = process.env.port || 7000;
const app = (0, express_1.default)();
const server = app.listen(port, () => {
    console.log(`Server running on ${process.env.PORT}`);
});
(0, Middlewares_1.Middlewares)(app);
process.on("uncaughtException", () => {
    console.error("Uncaught Exception occurred");
    process.exit(1);
});
process.on("unhandledRejection", () => {
    server.close(() => {
        process.exit(1);
    });
});

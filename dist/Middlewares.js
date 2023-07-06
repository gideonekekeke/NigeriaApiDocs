"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Middlewares = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const appError_1 = __importDefault(require("./utils/appError"));
const morgan_1 = __importDefault(require("morgan"));
require("./utils/db");
const allRoutes_1 = __importDefault(require("./routes/allRoutes"));
const Middlewares = (app) => {
    app
        .use(express_1.default.json())
        .use((0, cors_1.default)())
        .use((0, morgan_1.default)("dev"))
        .get("/", (req, res) => {
        return res.status(200).send("Hello Api");
    })
        .use("/api/v1/nigeria", allRoutes_1.default)
        // UNHANDLED ROUTE
        .all("*", (req, res, next) => {
        next(new appError_1.default(404, `Route ${req.originalUrl} not found`));
    })
        .use((error, req, res, next) => {
        error.status = error.status || "error";
        error.statusCode = error.statusCode || 500;
        res.status(error.statusCode).json({
            status: error.status,
            message: error.message,
        });
    });
};
exports.Middlewares = Middlewares;

import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import AppError from "./utils/appError";
import morgan from "morgan";
import "./utils/db";
import stateRoutes from "./routes/allRoutes";

export const Middlewares = (app: Application) => {
	app
		.use(express.json())
		.use(cors())
		.use(morgan("dev"))

		.get("/", (req: Request, res: Response) => {
			return res.status(200).send("Hello Api");
		})
		.use("/api/v1/nigeria", stateRoutes)

		// UNHANDLED ROUTE

		.all("*", (req: Request, res: Response, next: NextFunction) => {
			next(new AppError(404, `Route ${req.originalUrl} not found`));
		})

		.use((error: AppError, req: Request, res: Response, next: NextFunction) => {
			error.status = error.status || "error";
			error.statusCode = error.statusCode || 500;

			res.status(error.statusCode).json({
				status: error.status,
				message: error.message,
			});
		});
};

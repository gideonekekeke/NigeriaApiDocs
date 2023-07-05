import express from "express";
import { Middlewares } from "./Middlewares";

const port = process.env.port || 7000;

const app = express();

const server = app.listen(port, () => {
	console.log(`Server running on ${process.env.PORT}`);
});

Middlewares(app);

process.on("uncaughtException", () => {
	console.error("Uncaught Exception occurred");
	process.exit(1);
});

process.on("unhandledRejection", () => {
	server.close(() => {
		process.exit(1);
	});
});

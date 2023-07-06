"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// import dot from "dotenv";
// dot.config();
// const online_url: any = process.env.MONGODB_ONLINE_URI;
const offline_url = "mongodb://localhost/NigeriaRegionApi";
mongoose_1.default
    .connect(offline_url)
    .then(() => {
    console.log(`connected successfully`);
})
    .catch((err) => {
    console.log(err);
});

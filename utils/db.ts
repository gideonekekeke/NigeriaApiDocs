import mongoose from "mongoose";
// import dot from "dotenv";
// dot.config();
// const online_url: any = process.env.MONGODB_ONLINE_URI;
const offline_url: any = "mongodb://localhost/NigeriaRegionApi";

mongoose
	.connect(offline_url)
	.then(() => {
		console.log(`connected successfully`);
	})
	.catch((err) => {
		console.log(err);
	});

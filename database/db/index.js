import mongoose from "mongoose";
import { MONGO_URI } from "../../config/constants.js";

mongoose.set("strictQuery", true);

mongoose.connection.addListener("connected", () => {
	console.log("Connected to database");
});

mongoose.connection.addListener("disconnected", () => {
	console.log("Disconnected from database");
});

export const connectDb = async () => {
	try {
		await mongoose.connect(MONGO_URI);
	} catch (error) {
		console.log(error.message);
	}
};

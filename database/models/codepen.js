import mongoose from "mongoose";
import { User } from "./user.js";

const codepenSchema = new mongoose.Schema({
	title: { type: String, required: true },
	xml: String,
	css: String,
	javascript: String,
	author: { type: mongoose.Types.ObjectId, ref: User, required: true },
});

const Codepen = mongoose.model("Codepen", codepenSchema);

export default Codepen;

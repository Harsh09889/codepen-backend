import express from "express";
import auth from "../middleware/auth.js";
import {
	getAllCodepens,
	postCodepen,
	updateCodepenById,
} from "../controllers/codeController.js";
const codeRouter = express.Router();

codeRouter.get("/", getAllCodepens);
codeRouter.post("/", auth, postCodepen);
codeRouter.patch("/:id", auth, updateCodepenById);

export default codeRouter;

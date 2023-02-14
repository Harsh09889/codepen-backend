import express from "express";
import {
	login,
	register,
	signinWithGitub,
} from "../controllers/authController.js";
const authRouter = express.Router();

authRouter.post("/login", login);
authRouter.post("/register", register);
authRouter.get("/github-signin", signinWithGitub);

export default authRouter;

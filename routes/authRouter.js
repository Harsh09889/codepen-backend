import express from "express";
import {
	getLoggedInUser,
	login,
	register,
	signinWithGitub,
} from "../controllers/authController.js";
import authMiddleware from "../middleware/auth.js";
const authRouter = express.Router();

authRouter.get("/loggedInUser", authMiddleware, getLoggedInUser);
authRouter.post("/login", login);
authRouter.post("/register", register);
authRouter.get("/github/:code", signinWithGitub);

export default authRouter;

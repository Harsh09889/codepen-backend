import dotenv from "dotenv";
dotenv.config();
export const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
export const PORT = process.env.PORT;
export const GITHUB_OAUTH_CLIENT_ID = process.env.GITHUB_OAUTH_CLIENT_ID;
export const GITHUB_OAUTH_CLIENT_SECRET =
	process.env.GITHUB_OAUTH_CLIENT_SECRET;
export const MONGO_URI = process.env.MONGO_URI;

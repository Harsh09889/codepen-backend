import express from "express";
import cors from "cors";

import { PORT } from "./config/constants.js";
import { connectDb } from "./database/db/index.js";
import authRouter from "./routes/authRouter.js";

const app = express();

app.use(express.json());
app.use(cors({ credentials: true, origin: true }));

app.use("/api/auth", authRouter);

app.listen(PORT, () => {
	console.log("App is listening at", PORT);
});

connectDb();

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./lib/mongodb.js";
import authRouter from "./routers/auth.router.js";
import applicationRouter from "./routers/application.router.js";
import userRouter from "./routers/user.router.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/applications", applicationRouter);

app.listen(PORT, () => {
  console.log(`career-nest server is live on http://localhost:${PORT}`);
  connectDB();
});

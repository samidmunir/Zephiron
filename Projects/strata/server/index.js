import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./databases/mongodb.js";
import authRouter from "./routers/auth.route.js";
import applicationRouter from "./routers/application.route.js";

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/applications", applicationRouter);

app.listen(PORT, () => {
  console.log(`strata SERVER is live on http://localhost:${PORT}`);
  connectDB();
});

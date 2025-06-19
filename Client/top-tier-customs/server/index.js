import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { connectDB } from "./databases/mongodb.js";
import authRouter from "./routers/auth.router.js";

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);

app.listen(PORT, () => {
  console.log(`top-tier-customs SERVER is live on http://localhost:${PORT}`);
  console.log(`--> JWT_SECRET: ${process.env.JWT_SECRET}`);
  console.log(`--> ADMIN_CODE: ${process.env.ADMIN_CODE}`);
  connectDB();
});

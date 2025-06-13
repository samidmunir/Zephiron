import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./database/mongodb.js";
import authRouter from "./routes/auth.route.js";

dotenv.config();

const PORT = process.env.PORT;
const JWT_SECRET = process.env.JWT_SECRET;
const ADMIN_CODE = process.env.ADMIN_CODE;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);

app.listen(PORT, () => {
  console.log(`MaraveX SERVER is live on: http://localhost:${PORT}`);
  console.log(`--> JWT_SECRET: ${JWT_SECRET}`);
  console.log(`--> ADMIN_CODE: ${ADMIN_CODE}`);

  connectDB();
});

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import authRouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import applicationRouter from "./routes/application.route.js";

dotenv.config();

const PORT = process.env.SERVER_PORT || 3001;

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true, // only if you need cookies/auth across origins
  })
);

// app.options("*", cors()); // handle preflight

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/applications", applicationRouter);

app.listen(PORT, () => {
  console.log(`career-nest SERVER is live on: http://localhost:${PORT}`);
  connectDB();
});

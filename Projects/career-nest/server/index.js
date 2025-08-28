import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./lib/mongodb.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`career-nest server is live on http://localhost:${PORT}`);
  connectDB();
});

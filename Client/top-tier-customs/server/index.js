import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { connectDB } from "./databases/mongodb.js";
import adminRouter from "./routers/admin.router.js";
import authRouter from "./routers/auth.router.js";
import productRouter from "./routers/product.router.js";
import serviceRouter from "./routers/service.router.js";
import orderRouter from "./routers/order.router.js";
import bookingRouter from "./routers/booking.router.js";

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/admin", adminRouter);
app.use("/api/auth", authRouter);
app.use("/api/products", productRouter);
app.use("/api/services", serviceRouter);
app.use("/api/orders", orderRouter);
app.use("/api/bookings", bookingRouter);

app.listen(PORT, () => {
  console.log(`top-tier-customs SERVER is live on http://localhost:${PORT}`);
  console.log(`--> JWT_SECRET: ${process.env.JWT_SECRET}`);
  console.log(`--> ADMIN_CODE: ${process.env.ADMIN_CODE}`);
  connectDB();
});

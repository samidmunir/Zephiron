import express from "express";
import {
  createOrder,
  deleteOrder,
  editOrder,
  getAllOrders,
  getOrder,
} from "../controllers/order.controller.js";

const orderRouter = express.Router();

orderRouter.post("/create", createOrder);
orderRouter.get("/:id", getOrder);
orderRouter.get("/", getAllOrders);
orderRouter.put("/:id/edit", editOrder);
orderRouter.delete("/:id/delete", deleteOrder);

export default orderRouter;

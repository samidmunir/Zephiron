import express from "express";
import {
  createProduct,
  deleteProduct,
  editProduct,
  getAllProducts,
  getProduct,
} from "../controllers/product.controller.js";

const productRouter = express.Router();

productRouter.post("/create", createProduct);
productRouter.get("/:id", getProduct);
productRouter.get("/", getAllProducts);
productRouter.put("/:id/edit", editProduct);
productRouter.delete("/:id/delete", deleteProduct);

export default productRouter;

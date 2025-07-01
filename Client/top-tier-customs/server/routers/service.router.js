import express from "express";
import {
  createService,
  deleteService,
  editService,
  getAllServices,
  getService,
} from "../controllers/service.controller.js";

const serviceRouter = express.Router();

serviceRouter.post("/create", createService);
serviceRouter.get("/:id", getService);
serviceRouter.get("/", getAllServices);
serviceRouter.put("/:id/edit", editService);
serviceRouter.delete("/:id/delete", deleteService);

export default serviceRouter;

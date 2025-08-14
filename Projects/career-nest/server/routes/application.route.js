import express from "express";
import { track, update } from "../controllers/application.controller.js";
import { protectRoute } from "../middlewares/auth.middleware.js";

const applicationRouter = express.Router();

applicationRouter.post("/track", protectRoute, track);
applicationRouter.put("/:id", protectRoute, update);

export default applicationRouter;

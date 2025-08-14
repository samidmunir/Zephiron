import express from "express";
import {
  getApplication,
  getUserApplications,
  track,
  untrack,
  update,
} from "../controllers/application.controller.js";
import { protectRoute } from "../middlewares/auth.middleware.js";

const applicationRouter = express.Router();

applicationRouter.get("/user/:id", protectRoute, getUserApplications);
applicationRouter.get("/:id", getApplication);
applicationRouter.post("/track", protectRoute, track);
applicationRouter.delete("/:id", protectRoute, untrack);
applicationRouter.put("/:id", protectRoute, update);

export default applicationRouter;

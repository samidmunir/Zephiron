import express from "express";
import {
  fetchApplication,
  fetchApplications,
  fetchUserApplications,
  track,
  untrack,
  update,
} from "../controllers/application.controller.js";

const applicationRouter = express.Router();

applicationRouter.post("/track", track);
applicationRouter.get("/", fetchApplications);
applicationRouter.get("/:id", fetchApplication);
applicationRouter.put("/edit/:id", update);
applicationRouter.delete("/delete/:id", untrack);
applicationRouter.get("/user/:id", fetchUserApplications);

export default applicationRouter;

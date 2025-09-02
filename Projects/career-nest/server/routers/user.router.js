import express from "express";
import { fetchUserApplications } from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.get("/:id/applications", fetchUserApplications);

export default userRouter;

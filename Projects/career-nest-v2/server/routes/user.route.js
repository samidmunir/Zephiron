import express from "express";
import {
  getUserProfile,
  updateUserProfile,
  deleteUserProfile,
  resetPassword,
} from "../controllers/user.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js";

const userRouter = express.Router();

userRouter.get("/me", getUserProfile);
userRouter.put("/me", updateUserProfile);
userRouter.delete("/me", deleteUserProfile);
userRouter.put("/me/reset-password", resetPassword);

export default userRouter;

import express from "express";
import {
  getUserProfile,
  updateUserProfile,
  deleteUserProfile,
} from "../controllers/user.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js";

const userRouter = express.Router();

userRouter.get("/me", verifyToken, getUserProfile);
userRouter.put("/me", verifyToken, updateUserProfile);
userRouter.delete("/me", verifyToken, deleteUserProfile);

export default userRouter;

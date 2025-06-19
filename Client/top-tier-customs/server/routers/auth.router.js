import express from "express";
import {
  register,
  login,
  getUserData,
  resetPassword,
} from "../controllers/auth.controller.js";

const authRouter = express.Router();

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.get("/user-data/:id", getUserData);
authRouter.post("/reset-password/:id", resetPassword);

export default authRouter;

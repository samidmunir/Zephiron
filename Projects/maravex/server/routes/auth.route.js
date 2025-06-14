import express from "express";
import {
  register,
  login,
  updateProfile,
} from "../controllers/auth.controller.js";

const authRouter = express.Router();

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.put("/:id", updateProfile);

export default authRouter;

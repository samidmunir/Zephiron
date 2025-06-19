import express from "express";
import {
  register,
  login,
  getUserData,
} from "../controllers/auth.controller.js";

const authRouter = express.Router();

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.get("/user-data/:id", getUserData);

export default authRouter;

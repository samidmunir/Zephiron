import express from "express";
import {
  getProfile,
  login,
  logout,
  refreshToken,
  signup,
} from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const authRouter = express.Router();

authRouter.post("/signup", signup);
authRouter.post("/login", login);
authRouter.post("/logout", logout);
authRouter.post("/refresh-token", refreshToken);
authRouter.get("/profile", protectRoute, getProfile);

export default authRouter;

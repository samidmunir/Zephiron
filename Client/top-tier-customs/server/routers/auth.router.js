import express from "express";
import {
  register,
  login,
  getUserData,
  resetPassword,
  addSavedProduct,
  addSavedVehicle,
  editUserProfile,
  deleteSavedProduct,
  deleteSavedVehicle,
} from "../controllers/auth.controller.js";

const authRouter = express.Router();

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.get("/user-data/:id", getUserData);
authRouter.post("/reset-password/:id", resetPassword);
authRouter.post("/:id/add-saved-product", addSavedProduct);
authRouter.post("/:id/delete-saved-product", deleteSavedProduct);
authRouter.post("/:id/add-saved-vehicle", addSavedVehicle);
authRouter.post("/:id/delete-saved-vehicle", deleteSavedVehicle);
authRouter.put("/edit-profile/:id", editUserProfile);

export default authRouter;

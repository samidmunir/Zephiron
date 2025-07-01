import express from "express";
import {
  createAvailableBooking,
  deleteAvailableBooking,
  editAvailableBooking,
  getAllAvailableBookings,
  getAvailableBooking,
} from "../controllers/admin.controller.js";

const adminRouter = express.Router();

adminRouter.post("/available-bookings/create", createAvailableBooking);
adminRouter.get("/available-bookings/:id", getAvailableBooking);
adminRouter.get("/available-bookings", getAllAvailableBookings);
adminRouter.put("/available-bookings/:id/edit", editAvailableBooking);
adminRouter.delete("/available-bookings/:id/delete", deleteAvailableBooking);

export default adminRouter;

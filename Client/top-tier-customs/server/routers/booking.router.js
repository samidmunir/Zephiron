import express from "express";
import {
  createBooking,
  getBookings,
  deleteBooking,
} from "../controllers/booking.controller.js";

const bookingRouter = express.Router();

bookingRouter.post("/new", createBooking);
bookingRouter.get("/", getBookings);
bookingRouter.delete("/:id", deleteBooking);

export default bookingRouter;

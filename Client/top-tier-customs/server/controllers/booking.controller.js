import Booking from "../models/booking.model.js";
import OpenBooking from "../models/availableBooking.model.js";

export const createBooking = async (req, res) => {
  try {
    const {
      openBookingId,
      services,
      products,
      customerId,
      price,
      bookingDate,
      bookingTime,
      duration,
      paymentMethod,
    } = req.body;

    const booking = await Booking.create({
      services,
      products,
      customerId,
      price,
      bookingDate,
      bookingTime,
      duration,
      paymentMethod,
    });

    const updatedOpenBooking = await OpenBooking.findByIdAndUpdate(
      openBookingId,
      { isBooked: false },
      { new: true }
    );

    return res.status(201).json({
      success: true,
      message: "Booking created.",
      booking: booking,
      updated: updatedOpenBooking,
    });
  } catch (e) {
    return res
      .status(500)
      .json({ success: false, message: "Failed to book.", error: e.message });
  }
};

export const getBookings = async (req, res) => {};

export const getBooking = async (req, res) => {};

export const editBooking = async (req, res) => {};

export const deleteBooking = async (req, res) => {};

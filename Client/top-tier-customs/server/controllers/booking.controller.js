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
      { isBooked: true },
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

export const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();

    return res.status(200).json({
      success: true,
      message: "Successfully fetched bookings.",
      bookings: bookings,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch bookings.",
      error: e.message,
    });
  }
};

export const getBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);

    return res
      .status(200)
      .json({ success: true, message: "Booking found.", booking: booking });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: "Failed to find booking.",
      error: e.message,
    });
  }
};

export const editBooking = async (req, res) => {};

export const deleteBooking = async (req, res) => {};

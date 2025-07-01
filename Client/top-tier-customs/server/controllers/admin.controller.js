import User from "../models/user.model.js";
import Product from "../models/product.model.js";
import Service from "../models/service.model.js";
import Order from "../models/order.model.js";
import AvailableBooking from "../models/availableBooking.model.js";

export const createAvailableBooking = async (req, res) => {
  try {
    const { date, startTime, endTime } = req.body;
    if (startTime === endTime) {
      return res.status(400).json({
        success: false,
        message: "Failed to create Availble Booking.",
        error: "startTime and endTime cannot be the same.",
      });
    }

    const availableBooking = await AvailableBooking.create(req.body);

    return res.status(201).json({
      success: true,
      message: "Successfully created Available Booking.",
      booking: availableBooking,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: "Failed to create Available Booking.",
      error: e.message,
    });
  }
};

export const getAvailableBooking = async (req, res) => {
  try {
    const availableBooking = await AvailableBooking.findById(req.params.id);
    if (!availableBooking) {
      return res.status(404).json({
        success: false,
        message: "Failed to fetch Available Booking.",
        error: "Invalid/unknown Available Booking ID.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Available Booking found.",
      booking: availableBooking,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch Available Booking.",
      error: e.message,
    });
  }
};

export const getAllAvailableBookings = async (req, res) => {
  try {
    const availableBookings = await AvailableBooking.find();
    return res.status(200).json({
      success: true,
      message: "Available Bookings fetched successfully.",
      bookings: availableBookings,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch Available Bookings.",
      error: e.message,
    });
  }
};

export const editAvailableBooking = async (req, res) => {
  try {
    const updated = await AvailableBooking.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    return res.status(200).json({
      success: true,
      message: "Available Booking edited successfully.",
      booking: updated,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: "Failed to edit Available Booking.",
      error: e.message,
    });
  }
};

export const deleteAvailableBooking = async (req, res) => {
  try {
    await AvailableBooking.findByIdAndDelete(req.params.id);

    const availableBookings = await AvailableBooking.find();

    return res.status(200).json({
      success: true,
      message: "Available Booking deleted successfully.",
      bookings: availableBookings,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: "Failed to delete Available Booking.",
      error: e.message,
    });
  }
};

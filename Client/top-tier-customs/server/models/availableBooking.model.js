import mongoose from "mongoose";

const availableBookingSchema = new mongoose.Schema(
  {
    date: {
      type: String, // YYYY-MM-DD
      required: true,
    },
    startTime: {
      type: String, // 00:00
      required: true,
    },
    endTime: {
      type: String, // 00:00
      required: true,
    },
    isActive: {
      type: Boolean,
    },
    isBooked: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Available_Booking", availableBookingSchema);

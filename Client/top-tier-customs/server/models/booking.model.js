import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    services: {
      type: [String],
      required: true,
    },
    products: {
      type: [String],
      required: true,
    },
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    bookingDate: {
      type: String,
      required: true,
    },
    bookingTime: {
      type: String,
      required: true,
    },
    duration: {
      min: {
        type: Number,
        required: true,
      },
      max: {
        type: Number,
        required: true,
      },
    },
    isPaid: {
      type: Boolean,
      default: false,
    },
    paymentMethod: {
      type: String,
      enum: ["POS", "Stripe", "Credit-Card", "Debit-Card", "PayPal"],
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "confirmed", "canceled", "completed"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);

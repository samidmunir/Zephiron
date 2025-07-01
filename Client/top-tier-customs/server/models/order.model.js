import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    products: {
      type: [String],
      required: true,
    },
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    billingAddress: {
      name: {
        type: String,
      },
      address: {
        type: String,
      },
      city: {
        type: String,
      },
      postalCode: {
        type: String,
      },
      country: {
        type: String,
      },
    },
    shippingAddress: {
      name: {
        type: String,
      },
      address: {
        type: String,
      },
      city: {
        type: String,
      },
      postalCode: {
        type: String,
      },
      country: {
        type: String,
      },
    },
    paymentMethod: {
      type: String,
      enum: ["cash", "card"],
      required: true,
    },
    isPaid: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      enum: [
        "pending",
        "confirmed",
        "shipped",
        "canceled",
        "awaiting-pickup",
        "picked-up",
        "delivered",
      ],
      default: "pending",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);

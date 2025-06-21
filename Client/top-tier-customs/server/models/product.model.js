import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
    },
    price: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
    },
    quantity: {
      type: Number,
      required: true,
    },
    installable: {
      type: Boolean,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    fits: {
      type: [String],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);

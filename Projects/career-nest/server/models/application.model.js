import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: [true, "Job title is required."],
    },
    company: {
      type: String,
      required: [true, "Job company is required."],
    },
    workType: {
      type: String,
      enum: ["remote", "in-person", "hybrid"],
    },
    location: {
      city: {
        type: String,
      },
      country: {
        type: String,
      },
    },
    salary: {
      amount: {
        type: Number,
        required: [true, "Salary amount is required."],
      },
      period: {
        type: String,
        enum: ["hourly", "yearly"],
        required: [true, "Job salary period is required."],
      },
    },
    description: {
      type: String,
    },
    notes: {
      type: String,
    },
    requiredSkills: {
      type: [String],
    },
    applicationURL: {
      type: String,
      required: [true, "Application URL is required."],
    },
    category: {
      type: String,
      required: [true, "Job category is required."],
    },
    position: {
      type: String,
      required: [true, "Job position is required."],
    },
    status: {
      type: String,
      enum: ["wishlist", "applied", "interview", "offer", "rejected"],
      default: "wishlist",
    },
  },
  { timestamps: true }
);

const Application = mongoose.model("Application", applicationSchema);

export default Application;

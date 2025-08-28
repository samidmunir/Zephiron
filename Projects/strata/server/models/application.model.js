import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "UserID is required to create a new application."],
    },
    reqID: {
      type: String,
    },
    title: {
      type: String,
      required: [true, "Job title is required to create a new application."],
    },
    company: {
      type: String,
      required: [true, "Job company is required to create a new application."],
    },
    workType: {
      type: String,
      enum: ["in-person", "hybrid", "remote"],
      required: [
        true,
        "Job work type is required to create a new application.",
      ],
    },
    location: {
      city: {
        type: String,
        required: [true, "Job city is required to create a new application."],
      },
      state: {
        type: String,
      },
      country: {
        type: String,
        required: [
          true,
          "Job country is required to create a new application.",
        ],
      },
    },
    salary: {
      amount: {
        type: Number,
        required: [
          true,
          "Job salary amount is required to create a new application.",
        ],
      },
      period: {
        type: String,
        enum: ["yearly", "hourly"],
        required: [
          true,
          "Job salary period is required to create a new application.",
        ],
      },
    },
    category: {
      type: String,
      required: [true, "Job category is required to create a new application."],
    },
    position: {
      type: String,
      required: [true, "Job position is required to create a new application."],
    },
    status: {
      type: String,
      enum: ["wishlist", "applied", "rejected", "closed"],
      default: "wishlist",
    },
    applicationURL: {
      type: String,
      required: [
        true,
        "Job application URL is required to create a new application.",
      ],
    },
    description: {
      type: String,
    },
    notes: {
      type: [String],
    },
    skills: {
      type: [String],
      required: [
        true,
        "Job required skills are required to create a new application.",
      ],
    },
  },
  { timestamps: true }
);

const Application = mongoose.model("Application", applicationSchema);

export default Application;

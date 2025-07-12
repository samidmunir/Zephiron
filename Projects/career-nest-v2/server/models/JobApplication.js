import mongoose from "mongoose";

const jobApplicationSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

    title: { type: String, required: true },
    company: { type: String, required: true },
    workType: {
      type: String,
      enum: ["remote", "in-person", "hybrid"],
      default: "remote",
    },

    location: {
      city: { type: String },
      country: { type: String },
    },

    salary: {
      amount: { type: Number },
      period: { type: String, enum: ["hourly", "yearly"], default: "yearly" },
    },

    description: { type: String },
    notes: { type: String },

    requiredSkills: [String],
    applicationUrl: { type: String },

    category: { type: String }, // e.g., "Software Engineering", "Design", "Marketing"
    position: { type: String }, // e.g., "Frontend Developer"

    status: {
      type: String,
      enum: ["wishlist", "applied", "interview", "offer", "rejected"],
      default: "wishlist",
    },
  },
  { timestamps: true }
);

export default mongoose.model("JobApplication", jobApplicationSchema);

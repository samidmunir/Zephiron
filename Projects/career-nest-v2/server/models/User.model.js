import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String },
    startDate: { type: String, required: true },
    endDate: { type: String }, // null or "Present"
    description: { type: String },
  },
  { _id: false }
);

const educationSchema = new mongoose.Schema(
  {
    institution: { type: String, required: true },
    degree: { type: String },
    fieldOfStudy: { type: String },
    startYear: { type: String },
    endYear: { type: String },
  },
  { _id: false }
);

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    dob: { type: String },
    email: { type: String, required: true, unique: true },
    phone: { type: String },
    password: { type: String, required: true, minLength: 6 },
    role: { type: String, enum: ["admin", "user"], required: true },
    career: { type: String, required: true },

    // Enhanced profile
    bio: { type: String },
    avatar: { type: String }, // URL to profile image
    website: { type: String },

    // Location
    location: {
      city: { type: String },
      country: { type: String },
    },

    // Billing
    billingAddress: {
      name: { type: String },
      address: { type: String },
      city: { type: String },
      postalCode: { type: String },
      country: { type: String },
    },

    // Resume fields
    skills: [{ type: String }],
    experience: [experienceSchema],
    education: [educationSchema],

    // Future use
    socialLinks: {
      linkedin: { type: String },
      github: { type: String },
      portfolio: { type: String },
    },
    subscription: {
      tier: {
        type: String,
        enum: ["FREE", "BASIC", "PRO"],
        default: "FREE",
      },
      expiresAt: Date,
      stripeCustomerId: String,
      isAutoRenew: Boolean,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);

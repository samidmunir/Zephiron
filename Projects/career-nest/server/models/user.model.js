import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const experienceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Experience title is required."],
    },
    company: {
      type: String,
      required: [true, "Experience company is required."],
    },
    location: {
      type: String,
      required: [true, "Experience location is required."],
    },
    startDate: {
      type: String,
      required: [true, "Experience startDate is required."],
    },
    endDate: {
      type: String,
      required: [true, "Experience endDate is required."],
    },
    description: {
      type: String,
      required: [true, "Experience description is required."],
    },
  },
  {
    _id: false,
  }
);

const educationSchema = new mongoose.Schema(
  {
    institution: {
      type: String,
      required: [true, "Education institution is required."],
    },
    degree: {
      type: String,
      required: [true, "Education degree is required."],
    },
    fieldOfStudy: {
      type: String,
      required: [true, "Education field of study is required."],
    },
    startYear: {
      type: String,
      required: [true, "Education start year is required."],
    },
    endYear: {
      type: String,
      required: [true, "Education end year is required."],
    },
  },
  { _id: false }
);

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "User first name is required."],
    },
    lastName: {
      type: String,
      required: [true, "User last name is required."],
    },
    dob: {
      type: String,
    },
    email: {
      type: String,
      required: [true, "User email is required."],
      unique: true,
    },
    phone: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "User password is required."],
      minLength: [6, "Password must be at least 6 characters long."],
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      required: [true, "User role is required, cannot decode user role."],
    },
    career: {
      type: String,
      required: [true, "User career is required."],
    },

    bio: { type: String },
    avatar: { type: String },
    website: { type: String },

    location: {
      city: { type: String },
      country: { type: String },
    },

    billingAddress: {
      name: { type: String },
      address: { type: String },
      city: { type: String },
      postalCode: { type: String },
      country: { type: String },
    },

    skills: [String],
    experience: [experienceSchema],
    education: [educationSchema],

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
      expiresAt: String,
      stripeCustomerId: String,
      isAutoRenew: Boolean,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  } else {
    try {
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
    } catch (error) {
      next(error);
    }
  }
});

userSchema.methods.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", userSchema);

export default User;

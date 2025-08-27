import mongoose from "mongoose";

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
    email: {
      type: String,
      required: [true, "User email is required."],
    },
    password: {
      type: String,
      required: [true, "User password is required."],
    },
    city: {
      type: String,
      required: [true, "User city is required."],
    },
    country: {
      type: String,
      required: [true, "User country is required."],
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    career: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;

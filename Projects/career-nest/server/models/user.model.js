import mongoose from "mongoose";

const userSchema = mongoose.Schema(
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
      type: Date,
    },
    email: {
      type: String,
      required: [true, "User email is required."],
    },
    phone: {
      type: String,
    },
    password: {
      type: String,
      required: [true, "User password is required."],
    },
    career: {
      type: String,
      required: [true, "User career is required."],
    },
    billing: {
      address: {
        type: String,
        // required: [true, "User billing>address is required."],
      },
      city: {
        type: String,
        // required: [true, "User billing>city is required."],
      },
      state: {
        type: String,
      },
      country: {
        type: String,
        // required: [true, "User billing>country is required."],
      },
      zip: {
        type: String,
        // required: [true, "User billing>zip is required."],
      },
    },
    subscription: {
      stripeUserID: {
        type: String,
      },
      planID: {
        type: String,
      },
      plan: {
        type: String,
        enum: ["FREE", "BASIC", "PRO"],
        default: "FREE",
        // required: [true, "User subscription>plan is required."],
      },
      period: {
        type: String,
        enum: ["monthly", "yearly"],
        // required: [true, "User subscription>period is required."],
        default: "monthly",
      },
      autoRenew: {
        type: Boolean,
        // required: [true, "User subscription>autoRenew is required."],
        default: true,
      },
      startDate: {
        type: Date,
      },
      renewalDate: {
        type: Date,
      },
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;

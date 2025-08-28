import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const signup = async (req, res) => {
  try {
    const { firstName, lastName, email, password, career } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(403).json({
        success: false,
        message: "User signup failed <auth.controller>",
        error: `${email} is already in use.`,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      city,
      state,
      country,
    });

    const userRes = {
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      dob: user.dob,
      email: user.email,
      phone: user.phone,
      career: user.career,
      billing: user.billing,
      subscription: user.subscription,
      role: user.role,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };

    return res
      .status(201)
      .json({ success: true, message: "Signup successful.", user: userRes });
  } catch (error) {
    console.log(`Error in signup() <auth.controller>: ${error}`);
    return res.status(500).json({
      success: false,
      message: "Internal server error.",
      error: error.message,
    });
  }
};

export const login = async (req, res) => {};

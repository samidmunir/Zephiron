import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;
const ADMIN_CODE = process.env.ADMIN_CODE;

export const register = async (req, res) => {
  try {
    const { firstName, lastName, location, email, password, adminCode } =
      req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Registration failed.",
        error: "Email already in use.",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const role = adminCode === ADMIN_CODE ? "admin" : "customer";

    const newUser = await User.create({
      firstName,
      lastName,
      location,
      email,
      password: hashedPassword,
      role,
    });

    return res
      .status(201)
      .json({
        success: true,
        message: "Registration successful.",
        user: {
          id: newUser._id,
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          location: newUser.location,
          email: newUser.email,
          role: newUser.role,
        },
      });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: "Registration failed.",
      error: e.message,
    });
  }
};

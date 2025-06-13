import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;
const ADMIN_CODE = process.env.ADMIN_CODE;

export const register = async (req, res) => {
  try {
    const { name, phone, email, password, adminCode } = req.body;
    const [firstName, lastName] = name.split(" ");

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
      email,
      phone,
      password: hashedPassword,
      role,
    });

    const token = jwt.sign({ id: newUser._id }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN,
    });

    return res.status(201).json({
      token,
      user: {
        id: newUser._id,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        dob: newUser.dob,
        email: newUser.email,
        phone: newUser.phone,
        billingAddress: newUser.billingAddress,
        shippingAddress: newUser.shippingAddress,
        isSubscribed: newUser.isSubscribed,
        role: newUser.role,
        createAt: newUser.createdAt,
        updatedAt: newUser.updatedAt,
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

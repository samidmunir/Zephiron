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

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials.",
        error: "User not found.",
      });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials.",
        error: "User not validated.",
      });
    }

    const token = jwt.sign({ id: user._id }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN,
    });

    return res.status(201).json({
      token,
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        dob: user.dob,
        email: user.email,
        phone: user.phone,
        billingAddress: user.billingAddress,
        shippingAddress: user.shippingAddress,
        isSubscribed: user.isSubscribed,
        role: user.role,
        createAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
    });
  } catch (e) {
    return res
      .status(500)
      .json({ success: false, message: "Login failed.", error: e.message });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const updated = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    return res.status(200).json({
      success: true,
      message: "Profile updated.",
      user: {
        id: updated._id,
        firstName: updated.firstName,
        lastName: updated.lastName,
        dob: updated.dob,
        email: updated.email,
        phone: updated.phone,
        billingAddress: updated.billingAddress,
        shippingAddress: updated.shippingAddress,
        isSubscribed: updated.isSubscribed,
        role: updated.role,
        createAt: updated.createdAt,
        updatedAt: updated.updatedAt,
      },
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: "Profile update failed.",
      error: e.message,
    });
  }
};

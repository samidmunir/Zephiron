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

    return res.status(201).json({
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

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Login failed.",
        error: "User not found.",
      });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({
        success: false,
        message: "Login failed.",
        error: "Invalid credentials.",
      });
    }

    const token = jwt.sign({ id: user._id }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN,
    });

    const userData = {
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      dob: user.dob,
      location: user.location,
      phone: user.phone,
      email: user.email,
      role: user.role,
      billingAddress: user.billingAddress,
      shippingAddress: user.shippingAddress,
      vehicles: user.vehicles,
      savedProducts: user.savedProducts,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };

    return res.status(200).json({ token: token, user: userData });
  } catch (e) {
    return res
      .status(500)
      .json({ success: false, message: "Login failed.", error: e.message });
  }
};

export const editUserProfile = async (req, res) => {
  try {
    const updated = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    return res
      .status(200)
      .json({
        success: true,
        message: "User profile updated.",
        userData: updated,
      });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: "Failed to update user profile.",
      error: e.message,
    });
  }
};

export const getUserData = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Failed to fetch user data.",
        error: "Invalid/unknown User ID.",
      });
    }

    const userData = {
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      dob: user.dob,
      location: user.location,
      phone: user.phone,
      email: user.email,
      role: user.role,
      billingAddress: user.billingAddress,
      shippingAddress: user.shippingAddress,
      vehicles: user.vehicles,
      savedProducts: user.savedProducts,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };

    return res.status(200).json({
      success: true,
      message: "User data retrieved.",
      userData: userData,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch user data.",
      error: e.message,
    });
  }
};

export const resetPassword = async (req, res) => {
  try {
    const { password, newPassword } = req.body;

    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Password reset failed.",
        error: "Invalid/unknown User ID.",
      });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({
        success: false,
        message: "Password reset failed.",
        error: "Invalid credentials.",
      });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { password: hashedPassword },
      { new: true }
    );

    return res.status(200).json({
      success: true,
      message: "Password reset successful.",
      user: updatedUser,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: "Reset password failed",
      error: e.message,
    });
  }
};

export const addSavedProduct = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { productId } = req.body;
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Unable to save product.",
        error: "Invalid/unknown User ID.",
      });
    }

    const savedProducts = user.savedProducts;
    savedProducts.push(productId);

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { savedProducts: savedProducts },
      {
        new: true,
      }
    );

    return res.status(200).json({
      success: true,
      message: "Product saved successfully.",
      user: updatedUser,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: "Failed to save product.",
      error: e.message,
    });
  }
};

export const addSavedVehicle = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { vehicle } = req.body;
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Unable to save vehicle.",
        error: "Invalid/unknown User ID.",
      });
    }

    const savedVehicles = user.vehicles;
    savedVehicles.push(vehicle);

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { vehicles: savedVehicles },
      {
        new: true,
      }
    );

    return res.status(200).json({
      success: true,
      message: "Vehicle saved successfully.",
      user: updatedUser,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: "Failed to save vehicle.",
      error: e.message,
    });
  }
};

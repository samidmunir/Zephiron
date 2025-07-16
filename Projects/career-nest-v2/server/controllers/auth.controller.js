import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.model.js";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;
const ADMIN_CODE = process.env.ADMIN_CODE;

export const register = async (req, res) => {
  try {
    const { name, email, password, adminCode, career } = req.body;

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

    const role = adminCode === ADMIN_CODE ? "admin" : "user";

    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      role,
      career,
    });

    const userData = {
      _id: newUser._id,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      email: newUser.email,
      phone: newUser.phone,
      career: newUser.career,
      role: newUser.role,
      bio: newUser.bio,
      location: newUser.location,
      avatar: newUser.avatar,
      subscription: newUser.subscription,
      subscriptionActiveUntil: newUser.subscriptionActiveUntil,
    };

    return res.status(201).json({
      success: true,
      message: "Registration succesful.",
      user: userData,
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
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone,
      career: user.career,
      role: user.role,
      bio: user.bio,
      location: user.location,
      experience: user.experience,
      education: user.education,
      avatar: user.avatar,
      subscription: user.subscription,
      subscriptionActiveUntil: user.subscriptionActiveUntil,
    };

    return res.status(200).json({
      success: true,
      message: "Login successful.",
      token: token,
      user: userData,
    });
  } catch (e) {
    return res
      .status(500)
      .json({ success: false, messaeg: "Login failed.", error: e.message });
  }
};

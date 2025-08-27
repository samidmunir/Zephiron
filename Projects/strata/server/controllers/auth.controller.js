import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;

export const signup = async (req, res) => {
  try {
    const { firstName, lastName, email, password, city, country } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(403).json({
        success: false,
        message: "Signup failed.",
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
      country,
    });

    return res.status(201).json({
      success: true,
      message: "Signup successful.",
      user: {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
    });
  } catch (error) {
    console.error(`Error in signup() controller: ${error}`);
    console.log(`Error in signup() controller: ${error.message}`);
    return res.status(500).json({
      success: false,
      message: "Signup failed. - Internal server error",
      error: error,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Login failed.",
        error: `User not found with email ${email}`,
      });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(401).json({
        success: false,
        message: "Login failed.",
        error: "Invalid credentials.",
      });
    }

    const token = jwt.sign({ id: user._id }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN,
    });

    return res
      .status(200)
      .json({
        success: true,
        token: token,
        user: {
          _id: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          role: user.role,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
        },
      });
  } catch (error) {
    console.error(`Error in login() controller: ${error}`);
    console.log(`Error in login() controller: ${error.message}`);
    return res.status(500).json({
      success: false,
      message: "Login failed. - Internal server error",
      error: error,
    });
  }
};

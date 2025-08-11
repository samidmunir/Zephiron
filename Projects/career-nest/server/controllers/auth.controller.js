import { redis } from "../lib/redis.js";
import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

const generateTokens = (userID) => {
  const accessToken = jwt.sign({ userID }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "15m",
  });

  const refreshToken = jwt.sign({ userID }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "7d",
  });

  return { accessToken, refreshToken };
};

const storeRefreshToken = async (userID, refreshToken) => {
  await redis.set(
    `refresh_token:${userID}`,
    refreshToken,
    "EX",
    7 * 24 * 60 * 60
  );
};

const setCookies = (res, accessToken, refreshToken) => {
  res.cookie("accessToken", accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 15 * 60 * 1000,
  });

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
};

export const signup = async (req, res) => {
  const { name, email, password, career } = req.body;

  if (!name) {
    return res.status(500).json({
      success: false,
      message: "Your name is required to create a new account.",
    });
  }

  if (!email) {
    return res.status(500).json({
      success: false,
      message: "Your email is required to create a new account.",
    });
  }

  if (!password) {
    return res.status(500).json({
      success: false,
      message: "Your password is required to create a new account.",
    });
  }

  if (!career) {
    return res.status(500).json({
      success: false,
      message: "Your career is required to create a new account.",
    });
  }

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({
        success: false,
        message: `User already exists with email: ${email}`,
      });
    }

    const [firstName, lastName] = name.split(" ");

    const user = await User.create({
      firstName,
      lastName,
      email,
      password,
      career,
      role: "user",
    });

    const { accessToken, refreshToken } = generateTokens(user._id);

    await storeRefreshToken(user._id, refreshToken);

    setCookies(res, accessToken, refreshToken);

    return res.status(201).json({
      success: true,
      message: "New user created successfully.",
      data: {
        _id: user._id,
        name: `${user.firstName} ${user.lastName}`,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.log("Error in signup() controller:", error.message);
    return res.status(500).json({
      success: false,
      message: "Internal server error.",
      error: error.message,
    });
  }
};

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
  try {
    const { name, email, password, career } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({
        success: false,
        message: `User already exists with email: ${email}`,
      });
    }

    const user = await User.create({ name, email, password, career });

    const { accessToken, refreshToken } = generateTokens(user._id);
    await storeRefreshToken(user._id, refreshToken);
    setCookies(res, accessToken, refreshToken);

    return res.status(201).json({
      success: true,
      message: "User created successfully.",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        career: user.career,
        role: user.role,
      },
    });
  } catch (error) {
    console.log("Error in signup() controller:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to create user - internal server error.",
      error: error,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (user && (await user.comparePassword(password))) {
      const { accessToken, refreshToken } = generateTokens(user._id);

      await storeRefreshToken(user._id, refreshToken);

      setCookies(res, accessToken, refreshToken);

      return res.status(200).json({
        success: true,
        message: "Login successful.",
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
          career: user.career,
          role: user.role,
        },
      });
    } else {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials." });
    }
  } catch (error) {
    console.log("Error in login() controller:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error.",
      error: error,
    });
  }
};

export const logout = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (refreshToken) {
      const decoded = jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET
      );
      await redis.del(`refresh_token:${decoded.userID}`);
    }

    res.clearCookie("accessToken");
    res.clearCookie("refreshToken");

    return res
      .status(200)
      .json({ success: true, message: "Logged out successfully." });
  } catch (error) {
    console.log("Error in logout() controller:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error.",
      error: error,
    });
  }
};

export const refreshToken = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) {
      return res
        .status(401)
        .json({ success: false, message: "No refresh token provided." });
    }

    const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
    const storedToken = await redis.get(`refresh_token:${decoded.userID}`);
    if (storedToken !== refreshToken) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid refresh token." });
    }

    const accessToken = jwt.sign(
      { userID: decoded.userID },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "15m" }
    );

    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 15 * 60 * 1000,
    });

    return res
      .status(200)
      .json({ success: true, message: "Access token refreshed successfully." });
  } catch (error) {
    console.log("Error in refreshToken() controller:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error.",
      error: error,
    });
  }
};

export const getProfile = async (req, res) => {
  try {
    return res.status(200).json(req.user);
  } catch (error) {
    console.log("Error in getProfile() controller:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error.",
      error: error,
    });
  }
};

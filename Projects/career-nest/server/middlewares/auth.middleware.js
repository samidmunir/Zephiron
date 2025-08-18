import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/user.model.js";

dotenv.config();

export const protectRoute = async (req, res, next) => {
  try {
    const accessToken = req.cookies.accessToken;
    if (!accessToken) {
      return res.status(401).json({
        success: false,
        message: "MDW_Unauthorized - No access token provided.",
      });
    }

    try {
      const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
      const user = await User.findById(decoded.userID).select("-password");
      if (!user) {
        return res.status(401).json({
          success: false,
          message: "MDW_Unauthorized - User not found.",
        });
      }

      req.user = user;
      next();
    } catch (error) {
      if (error.name === "TokenExpiredError") {
        console.log("Error in protectRoute() middleware:", error);
        return res.status(401).json({
          success: false,
          message: "MDW_Unauthorized - Access token expired.",
        });
      }
      throw error;
    }
  } catch (error) {
    console.log("Error in protectRoute() middleware:", error);
    return res.status(401).json({
      success: false,
      message: "MDW_Unauthorized - Invalid access token.",
    });
  }
};

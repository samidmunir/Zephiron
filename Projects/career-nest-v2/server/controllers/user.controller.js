import User from "../models/User.model.js";
import bcrypt from "bcryptjs";

export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.userId).lean();
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    const { password, ...userData } = user;

    return res.status(200).json(userData);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const updateUserProfile = async (req, res) => {
  try {
    const updates = req.body;
    if (updates.password) {
      updates.password = await bcrypt.hash(updates.password, 10);
    }

    const user = await User.findByIdAndUpdate(req.userId, updates, {
      new: true,
      runValidators: true,
    }).lean();

    if (!user) return res.status(404).json({ message: "User not found" });

    const { password, ...userData } = user;
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteUserProfile = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.userId);
    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const resetPassword = async (req, res) => {
  const { currentPassword, newPassword } = req.body;

  if (!currentPassword || !newPassword) {
    return res.status(400).json({ message: "Missing required fields." });
  }

  try {
    const user = await User.findById(req.userId);
    if (!user) return res.status(404).json({ message: "User not found." });

    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ message: "Current password is incorrect." });
    }

    const hashed = await bcrypt.hash(newPassword, 10);
    user.password = hashed;
    await user.save();

    res.status(200).json({ message: "Password updated successfully." });
  } catch (err) {
    console.error("Password reset error:", err);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};

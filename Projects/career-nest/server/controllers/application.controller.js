import User from "../models/user.model.js";
import Application from "../models/application.model.js";

export const getUserApplications = async (req, res) => {
  try {
    const user = req.user;
    const userID = user.id;

    const applications = await Application.find({ userID: userID });

    return res.status(200).json({
      success: true,
      message: "User applications fetched successfully.",
      data: applications,
    });
  } catch (error) {
    console.log("Error in getUserApplications() controller:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error.",
      error: error,
    });
  }
};

export const getApplication = async (req, res) => {
  try {
    const applicationID = req.params.id;

    const application = await Application.findById(applicationID);
    if (!application) {
      return res
        .status(404)
        .json({ success: false, message: "Application not found." });
    }

    return res
      .status(200)
      .json({
        success: true,
        message: "Application fetched successfully.",
        data: application,
      });
  } catch (error) {
    console.log("Error in getApplication() controller:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error.",
      error: error,
    });
  }
};

export const track = async (req, res) => {
  try {
    const { title, company, salary, url, category, position } = req.body;

    const user = req.user;

    const application = await Application.create({
      userID: user._id,
      title,
      company,
      salary,
      applicationURL: url,
      category,
      position,
    });

    return res.status(200).json({
      success: true,
      message: "Application successfully tracked.",
      data: {
        id: application._id,
        title: application.title,
        company: application.company,
        salary: application.salary,
        url: application.url,
        category: application.category,
        position: application.position,
      },
      user: user,
    });
  } catch (error) {
    console.log("Error in track() controller:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error.",
      error: error,
    });
  }
};

export const update = async (req, res) => {
  const user = req.user;
  const applicationID = req.params.id;
  const updates = req.body;
  try {
    try {
      const dbUser = await User.findById(user._id);
      //   console.log("dbUser._id:", dbUser._id);
      //   console.log("applicationID:", applicationID);

      const application = await Application.findById(applicationID);
      if (!application) {
        return res
          .status(404)
          .json({ success: false, message: "Application not found." });
      }

      //   console.log("application.userID:", application.userID);

      if (!application.userID.equals(dbUser._id)) {
        return res.status(401).json({
          success: false,
          message:
            "Unauthorized - You cannot update this application (no ownership).",
        });
      } else {
        const updatedApplication = await Application.findByIdAndUpdate(
          applicationID,
          updates,
          { new: true, runValidators: true }
        ).lean();

        return res.status(200).json({
          success: true,
          message: "Application updated successfully.",
          data: updatedApplication,
        });
      }
    } catch (error) {
      return res.status(401).json({
        success: false,
        message: "You do not have permission to change this application.",
      });
    }
  } catch (error) {
    console.log("Error in update() controller:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error.",
      error: error,
    });
  }
};

export const untrack = async (req, res) => {
  const user = req.user;
  const applicationID = req.params.id;
  try {
    const dbUser = await User.findById(user._id);

    const application = await Application.findById(applicationID);
    if (!application) {
      return res
        .status(404)
        .json({ success: false, message: "Application not found." });
    }

    if (!application.userID.equals(dbUser._id)) {
      return res.status(401).json({
        success: false,
        message:
          "Unauthorized - You cannot delete this application (no ownership).",
      });
    } else {
      await Application.findByIdAndDelete(applicationID);

      return res.status(200).json({
        success: true,
        message: "Application deleted successfully.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Application deleted successfully.",
      data: { user, applicationID },
    });
  } catch (error) {
    console.log("Error in untrack() controller:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error.",
      error: error,
    });
  }
};

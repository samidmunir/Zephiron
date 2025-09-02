import User from "../models/user.model.js";
import Application from "../models/application.model.js";

export const fetchUserApplications = async (req, res) => {
  try {
    const id = req.params.id;

    const user = await User.findById(id);
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Failed to fetch user applications.",
        error: "Unauthorized.",
      });
    }

    const applications = await Application.find({ userID: id });

    return res.status(200).json({
      success: true,
      message: "User applications fetched successfully.",
      applications: applications,
    });
  } catch (error) {
    console.error(`Error in fetchUserApplications() controller: ${error}`);
    console.log(
      `Error in fetchUserApplications() controller: ${error.message}`
    );
    return res.status(500).json({
      success: false,
      message: "Internal server error.",
      error: error.message,
    });
  }
};

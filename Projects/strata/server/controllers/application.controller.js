import User from "../models/user.model.js";
import Application from "../models/application.model.js";

export const track = async (req, res) => {
  try {
    const {
      userId,
      title,
      company,
      workType,
      city,
      state,
      country,
      amount,
      period,
      category,
      position,
      applicationURL,
      skills,
    } = req.body;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Failed to track application.",
        error: "Unauthorized.",
      });
    }

    const location = {};

    if (state === null || state === undefined || state === "") {
      location.city = city;
      location.country = country;
    } else {
      location.city = city;
      location.state = state;
      location.country = country;
    }

    const salary = {
      amount,
      period,
    };

    const application = await Application.create({
      userID: userId,
      title,
      company,
      workType,
      location,
      salary,
      category,
      position,
      applicationURL,
      skills,
    });

    return res.status(201).json({
      success: true,
      message: "Application tracking successful.",
      application: application,
    });
  } catch (error) {
    console.error(`Error in track() controller: ${error}`);
    console.log(`Error in track() controller: ${error.message}`);
    return res.status(500).json({
      success: false,
      message: "Internal server error.",
      error: error.message,
    });
  }
};

export const fetchApplications = async (req, res) => {};

export const fetchApplication = async (req, res) => {};

export const update = async (req, res) => {};

export const untrack = async (req, res) => {};

export const fetchUserApplications = async (req, res) => {
  try {
    const id = req.params.id;

    console.log(`fetchUserApplications ->\n\tid: ${id}`);

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

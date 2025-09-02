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

export const fetchApplication = async (req, res) => {
  try {
    const { userId } = req.body;
    const applicationID = req.params.id;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Failed to fetch application.",
        error: "Unauthorized.",
      });
    }

    const application = await Application.findById(applicationID);
    if (!application) {
      return res.status(404).json({
        success: false,
        message: "Failed to fetch application.",
        error: "Invalid/unknown applicationID.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Fetched application successfully.",
      application: application,
    });
  } catch (error) {
    console.error(`Error in fetchApplication() controller: ${error}`);
    console.log(`Error in fetchApplication() controller: ${error.message}`);
    return res.status(500).json({
      success: false,
      message: "Internal server error.",
      error: error.message,
    });
  }
};

export const update = async (req, res) => {
  try {
    const applicationID = req.params.id;
    const {
      userId,
      reqId,
      title,
      company,
      status,
      workType,
      city,
      state,
      country,
      amount,
      period,
      category,
      position,
      applicationURL,
      description,
      skills,
      notes,
    } = req.body;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Failed to update application.",
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

    const updated = await Application.findByIdAndUpdate(applicationID, {
      reqID: reqId,
      title: title,
      company: company,
      workType: workType,
      location: location,
      salary: salary,
      category: category,
      position: position,
      status: status,
      applicationURL: applicationURL,
      description: description,
      notes: notes,
      skills: skills,
    });

    return res
      .status(200)
      .json({
        success: true,
        message: "Application updated successfully.",
        application: updated,
      });
  } catch (error) {
    console.error(`Error in update() controller: ${error}`);
    console.log(`Error in update() controller: ${error.message}`);
    return res.status(500).json({
      success: false,
      message: "Internal server error.",
      error: error.message,
    });
  }
};

export const untrack = async (req, res) => {};

import Service from "../models/service.model.js";

export const createService = async (req, res) => {
  try {
    const {
      title,
      description,
      price,
      category,
      type,
      duration,
      dropOff,
      image,
    } = req.body;

    const serviceData = {
      title,
      description,
      price,
      category,
      type,
      duration,
      dropOff,
      image,
    };

    const service = await Service.create(serviceData);

    return res.status(201).json({
      success: true,
      message: "Service created successfully.",
      service: service,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: "Failed to create service.",
      error: e.message,
    });
  }
};

export const getService = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) {
      return res.status(404).json({
        success: false,
        message: "Failed to fetch service.",
        error: "Invalid/unknown Service ID.",
      });
    }

    return res
      .status(200)
      .json({ success: true, message: "Service found.", service: service });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch service.",
      error: e.message,
    });
  }
};

export const getAllServices = async (req, res) => {
  try {
    const services = await Service.find();
    return res.status(200).json({
      success: true,
      message: "Services fetched successfully.",
      services: services,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch services.",
      error: e.message,
    });
  }
};

export const editService = async (req, res) => {
  try {
    const updated = await Service.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    return res.status(200).json({
      success: true,
      message: "Service edited successfully.",
      service: updated,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: "Failed to edit service.",
      error: e.message,
    });
  }
};

export const deleteService = async (req, res) => {
  try {
    await Service.findByIdAndDelete(req.params.id);

    const services = await Service.find();

    return res.status(200).json({
      success: true,
      message: "Service deleted successfully.",
      services: services,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: "Failed to delete service.",
      error: e.message,
    });
  }
};

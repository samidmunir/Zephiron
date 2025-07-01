import Order from "../models/order.model.js";

export const createOrder = async (req, res) => {
  try {
    const {
      products,
      customerId,
      totalPrice,
      billingAddress,
      shippingAddress,
      paymentMethod,
    } = req.body;

    const orderData = {
      products,
      customerId,
      totalPrice,
      billingAddress,
      shippingAddress,
      paymentMethod,
    };

    const order = await Order.create(orderData);

    return res.status(201).json({
      success: true,
      message: "Order created successfully.",
      order: order,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: "Failed to create order.",
      error: e.message,
    });
  }
};

export const getOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Failed to fetch order.",
        error: "Invalid/unknown Order ID.",
      });
    }

    return res
      .status(200)
      .json({ success: true, message: "Order found.", order: order });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch order.",
      error: e.message,
    });
  }
};

export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    return res.status(200).json({
      success: true,
      message: "Orders fetched successfully.",
      orders: orders,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch orders.",
      error: e.message,
    });
  }
};

export const editOrder = async (req, res) => {
  try {
    const updated = await Order.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    return res.status(200).json({
      success: true,
      message: "Order edited successfully.",
      order: updated,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: "Failed to edit order.",
      error: e.message,
    });
  }
};

export const deleteOrder = async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);

    const orders = await Order.find();

    return res.status(200).json({
      success: true,
      message: "Order deleted successfully.",
      orders: orders,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: "Failed to delete order.",
      error: e.message,
    });
  }
};

import Product from "../models/product.model.js";

export const createProduct = async (req, res) => {
  try {
    const {
      title,
      description,
      price,
      quantity,
      installable,
      category,
      type,
      brand,
    } = req.body;

    const productData = {
      title,
      description,
      price,
      quantity,
      installable,
      category,
      type,
      brand,
    };

    const product = await Product.create(productData);

    return res.status(201).json({
      success: true,
      message: "Product created successfully.",
      product: product,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: "Failed ot create product.",
      error: e.message,
    });
  }
};

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

export const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Failed to fetch product.",
        error: "Invalid/unknown Product ID.",
      });
    }

    return res
      .status(200)
      .json({ success: true, message: "Product found.", product: product });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch product.",
      error: e.message,
    });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    return res
      .status(200)
      .json({
        success: true,
        message: "Products fetched successfully.",
        products: products,
      });
  } catch (e) {
    return res
      .status(500)
      .json({
        success: false,
        message: "Failed to fetch products.",
        error: e.message,
      });
  }
};

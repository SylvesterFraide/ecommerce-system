const Product = require("../models/product");

// CREATE PRODUCT
exports.createProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      image,
      category,
      stock,
      status
    } = req.body;

    const product = await product.create({
      name,
      description,
      price,
      image,
      category,
      stock,
      status
    });

    res.status(201).json({
      message: "Product created successfully",
      product
    });

  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
};
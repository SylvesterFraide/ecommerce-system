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

    const product = await Product.create({
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

// req.body contains the information sent by the frontend or Postman.
// Product.create() saves a new product in MongoDB.
// res.status(201) indicates successful creation.
// try/catch handles errors.
};

// GET ALL PRODUCTS
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).json({
      count: products.length,
      products
    });

  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch products"
    });
  }
};

// GET SINGLE PRODUCT
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found"
      });
    }

    res.status(200).json(product);

  } catch (error) {
    res.status(400).json({
      message: "Invalid product ID"
    });
  }

  // req.params.id retrieves the product ID from the URL.
  // findById() searches for that product.
};

// UPDATE PRODUCT
exports.updateProduct = async (req, res) => {
  try {
    const allowedFields = [
      "name",
      "description",
      "price",
      "image",
      "category",
      "stock",
      "status"
    ];

    const updates = {};

    for (const field of allowedFields) {
      if (req.body[field] !== undefined) {
        updates[field] = req.body[field];
      }
    }

    const product = await Product.findByIdAndUpdate(  //findByIdAndDelete() finds the product and removes it from MongoDB.
      req.params.id,
      updates,
      {
        new: true,
        runValidators: true
      }
    );

    if (!product) {
      return res.status(404).json({
        message: "Product not found"
      });
    }

    res.status(200).json({
      message: "Product updated successfully",
      product
    });

  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }

// new: true returns the updated product.
// runValidators: true applies the schema's validation rules.
// allowedFields prevents clients from changing fields outside our intended product fields.
};

// DELETE PRODUCT
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(
      req.params.id
    );

    if (!product) {
      return res.status(404).json({
        message: "Product not found"
      });
    }

    res.status(200).json({
      message: "Product deleted successfully"
    });

  } catch (error) {
    res.status(400).json({
      message: "Invalid product ID"
    });
  }
};
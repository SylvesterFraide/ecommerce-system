const express = require("express");

const router = express.Router();

const {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct
} = require("../controllers/productController");

// GET all products
router.get("/", getProducts);

// GET one product
router.get("/:id", getProductById);

// CREATE product
router.post("/", createProduct);

// UPDATE product
router.patch("/:id", updateProduct);

// DELETE product
router.delete("/:id", deleteProduct);

module.exports = router;
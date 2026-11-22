const express = require("express");

const router = express.Router();

const {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct
} = require("../controllers/productController");

const {
  protect,
  authorizeRoles
} = require("../middleware/authMiddleware");


// Public routes
router.get("/", getProducts);
router.get("/:id", getProductById);

// Admin-only routes
router.post(
  "/",
  protect,
  authorizeRoles("admin"),
  createProduct
);

router.patch(
  "/:id",
  protect,
  authorizeRoles("admin"),
  updateProduct
);

router.delete(
  "/:id",
  protect,
  authorizeRoles("admin"),
  deleteProduct
);

// // GET all products
// router.get("/", getProducts);

// // GET one product
// router.get("/:id", getProductById);

// // CREATE product
// router.post("/", createProduct);

// // UPDATE product
// router.patch("/:id", updateProduct);

// // DELETE product
// router.delete("/:id", deleteProduct);

module.exports = router;
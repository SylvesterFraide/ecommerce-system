const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({

  // Product name
  name: {
    type: String,
    required: [true, "Product name is required"],
    trim: true,
    minlength: [2, "Product name must be at least 2 characters"]
  },

  // Product description
  description: {
    type: String,
    required: [true, "Product description is required"],
    trim: true
  },

  // Product price
  price: {
    type: Number,
    required: [true, "Product price is required"],
    min: [0, "Price cannot be negative"]
  },

  // Product image URL
  image: {
    type: String,
    required: [true, "Product image is required"],
    trim: true
  },

  // Product category
  category: {
    type: String,
    required: [true, "Product category is required"],
    trim: true
  },

  // Available stock
  stock: {
    type: Number,
    required: true,
    default: 0,
    min: [0, "Stock cannot be negative"],
    validate: {
      validator: Number.isInteger,
      message: "Stock must be a whole number"
    }
  },

  // Product visibility
  status: {
    type: String,
    enum: ["active", "draft"],
    default: "active"
  }

}, {
  timestamps: true
});

// Create Product model
const Product = mongoose.model("Product", productSchema);

module.exports = Product;



// example in JSON format
// {
//   "_id": "674a12345678901234567890",
//   "name": "MacBook Air",
//   "description": "Lightweight laptop for everyday work",
//   "price": 95000,
//   "image": "https://example.com/macbook.jpg",
//   "category": "Electronics",
//   "stock": 15,
//   "status": "active",
//   "createdAt": "2026-11-22T10:00:00.000Z",
//   "updatedAt": "2026-11-22T10:00:00.000Z"
// }

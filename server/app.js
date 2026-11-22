require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const app = express();

app.use(helmet());

app.use(cors({
  origin: "http://localhost:5173"
}));

app.use(express.json());

const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");

app.get("/", (req, res) => {
  res.json({
    message: "E-commerce API is running successfully!"
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

module.exports = app;
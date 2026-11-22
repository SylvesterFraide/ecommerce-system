const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;

//mongoose allows Express to communicate with MongoDB.
//mongoose.connect() establishes the database connection.
//process.env.MONGODB_URI reads the connection string from .env.
//try/catch handles connection errors.
//process.exit(1) stops the application if the database connection fails
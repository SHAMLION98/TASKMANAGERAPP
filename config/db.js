const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async (req, res) => {
  try {
    await mongoose.connect(process.env.MONGDB);
  } catch (error) {
    console.log(error);
  }
  console.log("Connected Sucessfully to Mongo DB");
};

module.exports = connectDB;

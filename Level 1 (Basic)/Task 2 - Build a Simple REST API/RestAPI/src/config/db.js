const mongoose = require("mongoose");
require("dotenv").config();

const DB = process.env.DB_STRING.replace("<password>", process.env.DB_PASSWORD);

function connectDB() {
  mongoose
    .connect(DB)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((error) => {
      console.log(error);
    });
}

module.exports = { connectDB };

require("dotenv").config()
const mongoose = require("mongoose");

function connect() {
  try {
    const MONGO_DB_URI = process.env.MONGO_DB_URI;
    mongoose.connect(MONGO_DB_URI);
  } catch (error) {
    error(error);
  }
}

module.exports = { connect };

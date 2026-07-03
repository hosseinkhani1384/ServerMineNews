const mongoose = require("mongoose");

const connectdb = async (url) => {
  try {
    await mongoose.connect(url);
    console.log("connect database");
  } catch (error) {
    throw new Error()
    process.exit(1)
  }
};
module.exports = connectdb;

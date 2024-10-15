/*
* @desc DB connections and model export
*/
// importing mongoose
const mongoose = require('mongoose');
// connecting to the database
const connectDB = async() => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
  } catch (error) {
    process.exit(1);
  }
}
module.exports = connectDB;
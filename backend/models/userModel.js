/*
* @desc setting up model for User field in db
*/
// importing mongoose
const mongoose = require('mongoose');
// setting up the schema
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true,'Please add a name']
  },
  email: {
    type: String,
    required: [true,'Please add an email'],
    unique: true
  },
  password: {
    type: String,
    required: [true,'Please add a password'],
  }
}, {
  timestamps: true
});
// exporting the schema
module.exports = mongoose.model('User', userSchema);
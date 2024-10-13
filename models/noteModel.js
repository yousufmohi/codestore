/*
* @desc Schema setup for notes database
*/
const mongoose = require('mongoose');
// creating the schema
const noteSchema = mongoose.Schema({
  text: {
    type: String,
    required: [true,'Please add a text value']
  }
}, {
  timestamps: true
});
module.exports = mongoose.model('Note', noteSchema);
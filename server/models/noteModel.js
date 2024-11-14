/*
* @desc Schema setup for notes database
*/
const mongoose = require('mongoose');
// creating the schema
const noteSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  text: {
    type: String,
    required: [true,'Please add a text value']
  },
  title: {
    type: String,
    required: [true,'Please add a title']
  },
}, {
  timestamps: true
});
module.exports = mongoose.model('Note', noteSchema);
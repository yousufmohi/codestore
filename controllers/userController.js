const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');

const registerUser = (req,res) => {
  res.json({message: 'User Registered'});
};

const loginUser = (req,res) => {
  res.json({message: 'Logged in User'});
};

const getUser = (req,res) => {
  res.json({message: 'Got User'});
};

module.exports = {registerUser, loginUser, getUser};
/*
* @desc Controller for the user auth routes
*/
const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');
// generates a token which has the payload data, secret key, and the expiration
const generateToken = (id) => {
  return jwt.sign({id},process.env.JWT_SECRET, {
    expiresIn: '100d'
  });
};
// @desc Create/Register User
// @route POST /api/users
// @access Public
const registerUser = asyncHandler(async (req,res) => {
  const {name,email,password} = req.body;
  if(!name || !email || !password) {
    res.status(400);
    throw new Error('Please fill all fields');
  }
  // checking if the user already exists
  const userExists = await User.findOne({email});
  if(userExists) {
    res.status(400);
    throw new Error('User already exists');
  }
  // generating a salt and hashing the password 
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password,salt);
  // creating a user
  const user = await User.create({
    name,
    email,
    password: hashedPassword
  });
  if(user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id)
    });
  } else{
    res.status(400);
    throw new Error('User could not be registered');
  }

});

// @desc Login user
// @route POST /api/users/login
// @access Public
const loginUser = asyncHandler(async(req,res) => {
  const {email,password} = req.body;
  const user = await User.findOne({email});
  const passwordCompare = await bcrypt.compare(password,user.password);
  if (user && passwordCompare) {
    res.status(201);
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id)
    });
  } else {
    res.status(400);
    throw new Error('Invalid credentials');
  }
});



module.exports = {registerUser, loginUser};
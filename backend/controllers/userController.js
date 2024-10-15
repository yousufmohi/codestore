const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');

// /api/users
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

  // hashing password

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password,salt);

  const user = await User.create({
    name,
    email,
    password: hashedPassword
  });

  if(user) {
    console.log(user);
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email
    });
  } else{
    res.status(400);
    throw new Error('User could not be registered');
  }

});

// /api/users/login
const loginUser = asyncHandler(async(req,res) => {
  const {email,password} = req.body;
  const user = await User.findOne({email});
  const passwordCompare = await bcrypt.compare(password,user.password);
  if (user && passwordCompare) {
    res.status(201);
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email
    })
  } else {
    res.status(400);
    throw new Error('Invalid credentials');
  }
});

// /api/users/user
const getUser = asyncHandler(async(req,res) => {
  res.json({message: 'Got User'});
});

module.exports = {registerUser, loginUser, getUser};
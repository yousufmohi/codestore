/*
* @desc Setting up the auth middleware
*/
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
// protect function checks to see if the token is a valid token, setting the user object if so, otherwise sending a 401 status code
const protect = asyncHandler(async (req,res,next) => {
  let token;
  // checking for 'Bearer <token>'
  if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      // splits the text by space, and sets token to the second element (the token)
      token = req.headers.authorization.split(" ")[1];
      // decodes token and gets the payload data (the id)
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
      // getting the user data and setting it to the user object in request
      req.user = await User.findById(decodedToken.id).select('-password');
      // calling the next middleware function
      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Not Authorized");
    }
  }
  // if the token is invalid return a 401 error status
  if(!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});
module.exports = {protect};
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");
//@desc Register a user
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler(async (req, res) => {
  const {username, email, password } = req.body
  if(!username || !email || !password){
    res.status(400);
    throw new Error("All Fields are Mandatory!!");
  }
  const userAvailable = await User.findOne({email})
  if (userAvailable){
    res.status(400);
    throw new Error("The user already exist");
  }

  //Hash Password
  const hashedPassword = await bcrypt.hash(password, 10)
  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({_id: user.id, email: user.email});
  }
  else{
    res.status(400);
    throw new Error("User data is not valid");
  }
});

//@desc Login a user
//@route POST /api/users/login
//@access public
const logninUser = asyncHandler(async (req, res) => {
  res.json({ message: "Login the user" });
});

//@desc Get a user information
//@route GET /api/users/current
//@access public
const currentUser = asyncHandler(async (req, res) => {
    res.json({message: "Curent user information"});
});

module.exports = { registerUser, logninUser, currentUser };



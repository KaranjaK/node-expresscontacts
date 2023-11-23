const asyncHandler = require("express-async-handler");
//@desc Register a user
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Register the user" });
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



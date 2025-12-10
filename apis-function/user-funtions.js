const User = require("../models/user");
exports.createUser = async (req, res) => {
  try {
    const { details } = req.body;
    console.log("Received details:", details);
    const creatUser = await User.create({
      firstName: details.firstName,
      lastName: details.lastName,
      email: details.email,
      mobileNumber: details.mobileNumber,
      password: details.password
    });
    console.log("User created:", creatUser);
    return res.status(200).json({
      success: true,
      message: "User is created successfully",
      data: creatUser
    });
  } catch (e) {
    console.log("Error creating user:", e);
    res.status(404).json({
      success: false,
      error: e.message,
    });
  }
};

exports.createManyUsers = async (req, res) => {
  try {
    const { details } = req.body;
    const createUser = await User.insertMany(details);
    return res.status(200).json({
      success: true,
      message: "User is created successfully",
    });
  } catch (e) {
    res.status(404).json({
      success: false,
      error: e,
    });
  }
};
exports.getAllUsers = async (req, res) => {
  try {
    const getDetails = await User.find();
    // console.log("The users details:", getDetails);
    return res.status(200).json({
      success: true,
      data: getDetails,
    });
  } catch (e) {
    res.status(404).json({
      success: false,
      error: e,
    });
  }
};
exports.updateEmail = async (req, res) => {
  try {
    const { name, email } = req.body;
    const updatethings = await User.updateOne(
      { firstName: name },
      { $set: { email: email } }
    );
    return res.status(200).json({
      success: true,
      message: "email is updated",
    });
  } catch (e) {
    res.status(404).json({
      success: false,
      error: e,
    });
  }
};

exports.updateUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const updatedUser = await User.findByIdAndUpdate(id, updates, { new: true });
    return res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: updatedUser
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      error: e.message,
    });
  }
};

exports.deleteUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);
    return res.status(200).json({
      success: true,
      message: "User deleted successfully",
      data: deletedUser
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      error: e.message,
    });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    return res.status(200).json({
      success: true,
      data: user
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      error: e.message,
    });
  }
};
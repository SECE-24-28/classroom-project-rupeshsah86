const express = require("express");
let createUser, createManyUsers, getAllUsers, updateEmail, updateUserById, deleteUserById, getUserById;
try {
  const userFunctions = require("../apis-function/user-funtions");
  createUser = userFunctions.createUser;
  createManyUsers = userFunctions.createManyUsers;
  getAllUsers = userFunctions.getAllUsers;
  updateEmail = userFunctions.updateEmail;
  updateUserById = userFunctions.updateUserById;
  deleteUserById = userFunctions.deleteUserById;
  getUserById = userFunctions.getUserById;
  console.log("Functions loaded:", {
    createUser: !!createUser,
    createManyUsers: !!createManyUsers,
    getAllUsers: !!getAllUsers,
    updateEmail: !!updateEmail
  });
} catch (error) {
  console.log("Error loading user functions:", error.message);
}
const router = express.Router();

router.post("/userSignup", (req, res) => {
  console.log("Route hit!");
  createUser(req, res);
});
router.post("/userSignupMany", createManyUsers);
router.get("/getUsers", getAllUsers);
router.get("/getUser/:id", getUserById);
router.put("/modifyMail", updateEmail);
router.put("/updateUser/:id", updateUserById);
router.delete("/deleteUser/:id", deleteUserById);
module.exports = router;
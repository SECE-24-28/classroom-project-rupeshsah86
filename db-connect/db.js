const mongoose = require("mongoose");
exports.connect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/Mern_Internship_4");
    console.log("Db is connected");
  } catch (e) {
    console.log("Error in connecting to the db");
  }
};

//get

//post

//put

//delete
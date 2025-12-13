const express = require("express");
const { getAllRequests } = require("../api-function/admin-function");
const router = express.Router();
router.get("/getRequests/:id", getAllRequests);
module.exports = router;

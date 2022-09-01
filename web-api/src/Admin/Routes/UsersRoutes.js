// All Imports must Declare here
const express = require("express");
const {getAllUsers} = require("../Controllers/UsersController");
const router = express.Router();



// Read all Categories Route
router.get("/getAll-Users", getAllUsers)



// Exporting all Routes
module.exports = router;
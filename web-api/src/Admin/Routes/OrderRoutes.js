// All Imports must Declare here
const express = require("express");
const {updateOrder, getAllOrders, deleteOrder} = require("../Controllers/OrderController");
const router = express.Router();



// Update a Category Route
router.put("/update-Order:id" , updateOrder)

// Read all Categories Route
router.get("/getAll-Orders" , getAllOrders)

// Delete a new Category Route
router.delete("/delete-Order:id", deleteOrder)



// Exporting all Routes
module.exports = router;
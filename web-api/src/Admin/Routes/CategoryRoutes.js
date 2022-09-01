// All Imports must Declare here
const express = require("express");
const router = express.Router();
const {createCategory, updateCategory, getAllCategories, deleteCategory} = require("../Controllers/CategoryController");



// Create a new Category Route
router.post("/create-Category",createCategory)

// Update a Category Route
router.put("/update-Category:id",updateCategory)

// Read all Categories Route
router.get("/getAll-Categories",getAllCategories)

// Delete a new Category Route
router.delete("/delete-Category:id",deleteCategory)



// Exporting all Routes
module.exports = router;
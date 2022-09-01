// All Imports must Declare here
const express = require("express");
const {createProduct, updateProduct, getAllProducts, deleteProduct} = require("../Controllers/ProductController");
const router = express.Router();



// Create a new Category Route
router.post("/create-Product", createProduct)

// Update a Category Route
router.put("/update-Product:id", updateProduct)

// Read all Categories Route
router.get("/getAll-Products", getAllProducts)

// Delete a new Category Route
router.delete("/delete-Product:id", deleteProduct)



// Exporting all Routes
module.exports = router;
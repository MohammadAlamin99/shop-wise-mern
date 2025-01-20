const express = require("express");
const router = express.Router();
const ProdcutController = require("../controllers/ProductController");
const CategoryController = require("../controllers/categoryController");
const userController = require("../controllers/userController");


router.get("/allProduct", ProdcutController.productList);
router.get("/category", CategoryController.CategoryList);

// user registration
router.post("/registration", userController.userRegistraion);


module.exports = router;
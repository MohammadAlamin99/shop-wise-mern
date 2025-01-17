const express = require("express");
const router = express.Router();
const ProdcutController = require("../controllers/ProductController");
const CategoryController = require("../controllers/categoryController");


router.get("/allProduct", ProdcutController.productList);
router.get("/category", CategoryController.CategoryList);


module.exports = router;
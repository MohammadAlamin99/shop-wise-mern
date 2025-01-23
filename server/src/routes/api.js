const express = require("express");
const router = express.Router();
const ProdcutController = require("../controllers/ProductController");
const CategoryController = require("../controllers/categoryController");
const userController = require("../controllers/userController");
const authentication = require("../middlewares/authentication");


router.get("/allProduct", ProdcutController.productList);
router.get("/category",authentication, CategoryController.CategoryList);

// user registration
router.post("/registration", userController.userRegistraion);
router.post("/login", userController.userLogin);


module.exports = router;
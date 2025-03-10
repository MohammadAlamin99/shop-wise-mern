const express = require("express");
const router = express.Router();
const ProdcutController = require("../controllers/ProductController");
const CategoryController = require("../controllers/categoryController");
const userController = require("../controllers/userController");
const authentication = require("../middlewares/authentication");

router.get("/allProduct", ProdcutController.productList);
router.get("/category", CategoryController.CategoryList);
router.get("/productByCategory/:id", ProdcutController.productByCategory);
router.get("/productDetails/:id", ProdcutController.productDetailsById);
router.post("/CartCreate", authentication, ProdcutController.createCartList);
router.delete("/removeCart", authentication, ProdcutController.deleteCartList);
router.get("/getCart", authentication, ProdcutController.cartList);


// user registration
router.post("/registration", userController.userRegistraion);
router.post("/login", userController.userLogin);

module.exports = router;

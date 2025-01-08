const express = require("express");
const router = express.Router();
const ProdcutController = require("../controllers/ProductController")


router.get("/allProduct", ProdcutController.productList)


module.exports = router;
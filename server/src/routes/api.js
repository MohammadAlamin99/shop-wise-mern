const express = require("express");
const router = express.Router();
const ProdcutController = require("../controllers/ProductController");
const CategoryController = require("../controllers/categoryController");
const collectionController = require("../controllers/collectionController");
const userController = require("../controllers/userController");
const invoiceController = require("../controllers/invoiceController");
const authentication = require("../middlewares/authentication");
const upload = require("../middlewares/upload");
const wishController = require("../controllers/wishController");
const reviewController = require("../controllers/reviewController");
const { getOrderList, updateOrder } = require("../services/orderService");

router.get("/allProduct", ProdcutController.productList);
router.get("/category", CategoryController.CategoryList);
router.get("/collectionList", collectionController.collectionList);
router.get("/productByCategory/:id", ProdcutController.productByCategory);
router.get("/productDetails/:id", ProdcutController.productDetailsById);
router.get("/prodcutByCollection/:id", ProdcutController.prodcutByCollection);
router.post("/CartCreate", authentication, ProdcutController.createCartList);
router.delete("/removeCart", authentication, ProdcutController.deleteCartList);
router.get("/getCart", authentication, ProdcutController.cartList);
router.post("/createInvoice", authentication, invoiceController.createInvoice);
router.get("/getInvoice", authentication, invoiceController.getInvoice);
router.get("/orderList", authentication, invoiceController.getOrderList);

// wishlist
router.post("/createWishlist", authentication, wishController.wishlistCrate);
router.delete("/deleteWish", authentication, wishController.deleteWish);
router.get("/wishList", authentication, wishController.wishList);
router.get("/search/:keyword", ProdcutController.searchKeyword);

// create review
router.post("/createReview",authentication, reviewController.createReview);
router.post("/getReview", reviewController.getReview);

// order list
router.get("/orders", getOrderList);
router.post("/updateOrder", updateOrder);

// user api
router.post("/registration", userController.userRegistraion);
router.post("/login", userController.userLogin);
router.post("/updateProfile",upload.single("image"), authentication, userController.userUpdate);
router.get("/userDetails",authentication, userController.userDetails);

module.exports = router;

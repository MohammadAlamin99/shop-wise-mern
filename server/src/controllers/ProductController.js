const { allProducts, getProductByCategory, ProductDetails, productSearchKeyword, getProductByCollection } = require("../services/product_service")
const { createCartService, removeCart, getAllCart } = require("../services/cartService")

exports.productList = async(req, res)=>{
    let result = await allProducts(req);
    return res.status(200).json(result);
}

exports.productByCategory = async(req, res)=>{
    let result = await getProductByCategory(req);
    return res.status(200).json(result);
}

exports.productDetailsById = async(req, res)=>{
    let result = await ProductDetails(req);
    return res.status(200).json(result);
}

// cart Item

exports.createCartList = async(req, res)=>{
    let result = await createCartService(req);
    return res.status(200).json(result);
}

exports.deleteCartList = async (req, res)=>{
    let result = await removeCart(req);
    return res.status(200).json(result);
}

exports.cartList = async (req, res)=>{
    let result = await getAllCart(req);
    return res.status(200).json(result);
}

// search
exports.searchKeyword = async (req, res)=>{
    let result = await productSearchKeyword(req);
    return res.status(200).json(result);
}

// filter by collection
exports.prodcutByCollection = async (req, res)=>{
    let result = await getProductByCollection(req);
    return res.status(200).json(result);
}


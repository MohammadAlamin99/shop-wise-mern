const { allProducts, getProductByCategory, ProductDetails } = require("../services/product_service")
const { createCartService, removeCart } = require("../services/cartService")

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
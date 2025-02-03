const { allProducts, getProductByCategory } = require("../services/product_service")

exports.productList = async(req, res)=>{
    let result = await allProducts(req);
    return res.status(200).json(result);
}
exports.productByCategory = async(req, res)=>{
    let result = await getProductByCategory(req);
    return res.status(200).json(result);
}
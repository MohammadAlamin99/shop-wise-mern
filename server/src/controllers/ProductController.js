const { allProducts } = require("../services/product_service")

exports.productList = async(req, res)=>{
    let result = await allProducts(req);
    return res.status(200).json(result);
}
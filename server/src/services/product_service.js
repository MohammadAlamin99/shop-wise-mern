const productModel = require("../models/productModel")


exports.allProducts = async()=>{
    try {
        let data = await productModel.find();
        return{status:"success", data:data}
    } catch (error) {
        return{status:"fail", error}        
    }
}
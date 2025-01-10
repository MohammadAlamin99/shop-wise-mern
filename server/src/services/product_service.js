const productModel = require("../models/productModel")

// all product get 
exports.allProducts = async()=>{
    try {
        let data = await productModel.find();
        return{status:"success", data:data}
    } catch (err) {
        return{status:"fail", err}        
    }
}

// all category get



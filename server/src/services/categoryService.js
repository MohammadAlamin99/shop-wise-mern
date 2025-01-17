const categoryModel = require("../models/categoryModel");


exports.category = async()=>{
    try {
        let data = await categoryModel.find();
        return{status:"success", data:data}
    } catch (e) {
        return{status:"fail", data:e}
    }
}
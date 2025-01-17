const { category } = require("../services/categoryService")

exports.CategoryList = async(req, res)=>{
    let result = await category(req);
    return res.status(200).json(result);
}
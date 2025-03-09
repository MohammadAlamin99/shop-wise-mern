const { cartService } = require("../services/cartService");


exports.CartCreate = async(req, res)=>{
    let result = await cartService(req);
    return res.status(200).json(result);
}
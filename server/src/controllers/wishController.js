const { CreateWish, RemoveWish, Wish } = require("../services/wishService");

exports.wishlistCrate = async (req, res)=>{
    let result = await CreateWish (req);
    return res.status(200).json(result);
}

exports.deleteWish = async (req, res)=>{
    let result = await RemoveWish (req);
    return res.status(200).json(result);
}
exports.wishList = async (req, res)=>{
    let result = await Wish (req);
    return res.status(200).json(result);
}
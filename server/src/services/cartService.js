const { TokenExpiredError } = require("jsonwebtoken");
const cartModel = require("../models/CartModel");
const productModel = require("../models/productModel");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

exports.createCartService = async (req) => {
  try {
    let id = req.user_id;
    let reqBody = req.body;
    let productID = reqBody.productID;
    let product = await productModel.findOne({ _id: productID });
    let price = product.price;
    let totalPrice = price * reqBody.qty;
    reqBody.userID = id;
    reqBody.price = totalPrice;
    await cartModel.updateOne(
      { userID: id, productID: reqBody.productID },
      { $set: reqBody },
      { upsert: true }
    );
    return { status: "Success", message: "Add to cart Successful" };
  } catch (e) {
    console.log(e);
    return { status: "Fail", message: "something went wrong" };
  }
};


exports.removeCart = async (req)=>{
  try {
    let reqbody = req.body;
    let id = req.user_id;
    let productId = reqbody.productID;

    await cartModel.deleteOne({
      productID:productId, userID:id
    });
    return{status:"Success", message:"remove cart"}
    
  } catch (e) {
    console.log(e)
    return{status:"fail", message:e}
  }
}


exports.getAllCart = async (req)=>{
  try {
    let id = new ObjectId(req.user_id);
    let matchStage ={$match:{userID:id}}

    let JoinStageProduct = {$lookup:{from:"products", localField:"productID", foreignField:"_id", as:"product"}}
    let unwindProductStage = {$unwind:"$product"}
    
    // let JoinStageCategory = {$lookup:{from:"categories", localField:"product.categoryID", foreignField:"_id", as:"category"}}
    // let unwindCategory = {$unwind:"$category"}

    let data = await cartModel.aggregate([
      matchStage,
      JoinStageProduct,
      unwindProductStage, 
      // JoinStageCategory, 
      // unwindCategory
    ])
    return{status:"Success", data: data} 

  } catch (e) {
    return{status:"fail", data:e}
  }
}
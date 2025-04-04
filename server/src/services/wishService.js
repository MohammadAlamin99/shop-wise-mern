const wishModel = require("../models/wishModel");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

exports.CreateWish = async (req, res) => {
  try {
    let id = req.user_id;
    let reqBody = req.body;
    reqBody.userID = id;

    await wishModel.updateOne(
      { userID: id, productID: reqBody.productID },
      { $set: reqBody },
      { upsert: true }
    );
    return { status: "success", message: "wish list created" };
  } catch (e) {
    console.log(e)
    return { status: "fail", message: "something went wrong" };
  }
};



exports.RemoveWish= async (req, res)=>{
    try {
        let id = req.user_id;
        let reqBody = req.body;  
        reqBody.userID = id;

        await wishModel.deleteOne({userID:id, productID: reqBody.productID});
        return({status:"success", message:"wish list Deleted"})
        
    } catch (e) {
        console.log(e)
        return ({status:"fail", message:"something went wrong"})
        
    }
}



exports.Wish = async(req)=>{
    try {
        let user_id = new ObjectId(req.user_id);

        let matchStage = {$match:{userID:user_id}}

        let JoinStageProduct = {$lookup:{from:"products", localField:"productID", foreignField:"_id", as:"product"}}
        let unwindProductStage = {$unwind:"$product"}

        
        
        let JoinStageCategory = {$lookup:{from:"categories", localField:"product.categoryID", foreignField:"_id", as:"category"}}
        let unwindCategory = {$unwind:"$category"}

        let projectionStage = {$project:{"_id":0, "userID":0, "createdAt":0, "updatedAt":0,"product._id":0,
    "product.categoryID":0, "product.brandID":0, "brand._id":0, "category._id":0,
    }}

       let data = await wishModel.aggregate([
            matchStage, JoinStageProduct, unwindProductStage, JoinStageCategory, unwindCategory, projectionStage
        ])
        return({status:"success", data:data})
    } catch (e) {
        return({status:"fail", message:"something went wrong"})
    }
}
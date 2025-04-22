const reviewModel = require("../models/reviewModel");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;


exports.reviewCreate = async (req) => {
  try {
    let reqbody = req.body;
    let userid = reqbody.userID;
    let productid = reqbody.productID;
    await reviewModel.findOne({
      userID: userid,
      productID: productid,
    });
    let resutl = await reviewModel.create(reqbody);
    return { status: "Success", data: resutl };
  } catch (e) {
    return { status: "Fail", data: e };
  }
};


exports.getAllReviews = async (req) => {
    try {
      const id = new ObjectId(req.body.userID);
  
      let data = await reviewModel.aggregate([
        {
          $match: { productID: id }
        },
        {
          $group: {
            _id: "$productID",
            reviews: { $push: "$$ROOT" },
            averageRating: { $avg: "$rating" },
            totalReviews: { $sum: 1 }
          }
        },
        {
          $project: {
            _id: 0,
            reviews: 1,
            averageRating: { $round: ["$averageRating", 1] }, 
            totalReviews: 1
          }
        }
      ]);
  
      // If no reviews found, return empty array with 0 average
      if (data.length === 0) {
        data = [{
          reviews: [],
          averageRating: 0,
          totalReviews: 0
        }];
      }
  
      return { status: "Success", data: data[0] };
    } catch (e) {
      return { status: "Fail", data: e };
    }
  };
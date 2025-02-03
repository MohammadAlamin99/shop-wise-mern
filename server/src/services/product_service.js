const productModel = require("../models/productModel");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

// all product get
exports.allProducts = async () => {
  try {
    let data = await productModel.find();
    return { status: "success", data: data };
  } catch (err) {
    return { status: "fail", err };
  }
};

// Product filter by category

exports.getProductByCategory = async (req) => {
  try {
    let categoryId = new ObjectId(req.params.categoryID);
    // const categoryId = new ObjectId("650af352a41095554cc74162"); 
    let data = await productModel.aggregate([
      {
        $lookup: {
          from: "categories",
          localField: "categoryID",
          foreignField: "_id",
          as: "category",
        },
      },
      { $match: { categoryID: categoryId } },
      {$unwind: "$category"}
    ]);
    console.log("hamim",categoryId)
    return { status: "success", data: data };
  } catch (err) {
    console.log(err)
    return { status: "fail", err };
  }
};



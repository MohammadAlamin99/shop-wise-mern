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
    const categoryId = new ObjectId(req.params.id);
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
      { $unwind: "$category" },
    ]);

    return { status: "success", data: data };
  } catch (err) {
    return { status: "fail", err };
  }
};

// Product Details
exports.ProductDetails = async (req) => {
  try {
    let produtId = new ObjectId(req.params.id);
    let JoinStage1 = {
      $lookup: {
        from: "categories",
        localField: "categoryID",
        foreignField: "_id",
        as: "category",
      },
    };
    let JoinStage2 = {
      $lookup: {
        from: "productdetails",
        localField: "_id",
        foreignField: "productID",
        as: "details",
      },
    };
    let unwindCategoryStage = { $unwind: "$category" };
    let unwindDetailsStage = { $unwind: "$details" };
    let matchStage = { $match: { _id: produtId } };
    let data = await productModel.aggregate([
      matchStage,
      JoinStage1,
      JoinStage2,
      unwindCategoryStage,
      unwindDetailsStage,
    ]);
    return { status: "success", data: data };
  } catch (e) {
    return { status: "fail", data: e.toString() };
  }
};



// search product

exports.productSearchKeyword = async (req) => {
  try {
    let searchRegex = { "$regex": req.params.keyword, "$options": "i" };
    let SearchParam = [{ title: searchRegex }, { shortDes: searchRegex }];
    let SearchQuery = { $or: SearchParam };
    let matchStage = { $match: SearchQuery };

    // let JoinStage1 = {
    //   $lookup: {
    //     from: "categories",
    //     localField: "categoryID",
    //     foreignField: "_id",
    //     as: "category",
    //   },
    // };
    // let unwindCategoryStage = { $unwind: "$category" };
    let data = await productModel.aggregate([
      matchStage,
      // JoinStage1,
      // unwindCategoryStage,
    ]);
    return { status: "success", data: data };
  } catch (e) {
    return { status: "fail", data: e };
  }
};

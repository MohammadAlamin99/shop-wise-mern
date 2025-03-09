const cartModel = require("../models/CartModel");
const productModel = require("../models/productModel");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

exports.CreateCart = async (req, res) => {
  try {
    let id = req.header.id;
    let reqBody = req.body;
    let productID = reqBody.productID;

    let product = await productModel.find({ _id: productID });
    let price = product.price;
    let totalPrice = price * reqBody.qty;
    reqBody.userID = user_id;
    reqBody.price = totalPrice;
    await cartModel.updateOne(
      { userID: user_id, productID: reqBody.productID },
      { $set: reqBody },
      { upsert: true }
    );
    return { status: "success", message: product };
  } catch (e) {
    return { status: "fail", message: "something went wrong" };
  }
};


const collectionModel = require("../models/collectionModel");

exports.collection = async (req) => {
  try {
    let data = await collectionModel.find();
    return { status: "success", data: data };
  } catch (e) {
    return { status: "fail", data: e };
  }
};

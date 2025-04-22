const mongoose = require("mongoose");
const dataSchema = mongoose.Schema(
  {
    userID: { type: mongoose.Schema.Types.ObjectID, required: true },
    productID: { type: mongoose.Schema.Types.ObjectID, required: true },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
      },
    comment: {type: String},
  },
  { timestamps: true, versionKey: false }
);

const reviewModel = mongoose.model("reviews", dataSchema);
module.exports = reviewModel;

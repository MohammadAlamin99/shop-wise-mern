const mongoose = require('mongoose');

const dataSchema =mongoose.Schema({
    title:{type:String, required:true},
    shortDes:{type:String, required:true},
    price:{type:Number, required:true},
    discount:{type:Number},
    image:{type:String, required:true},
    stock:{type:Boolean, required:true},
    star:{type:String, required:true},
    categoryId:{type:mongoose.Schema.Types.ObjectID, required: true}
});

const productModel = mongoose.model('products', dataSchema);
module.exports = productModel;
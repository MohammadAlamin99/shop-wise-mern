const mongoose = require('mongoose');
const dataSchema = mongoose.Schema({
    image:{type:String},
    fullName: {
        type: String,
        required: [true, "Full name is required"],
        trim: true,
    },
    userName: {
        type: String,
        required: [true, "Username is required"],
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        trim: true,
        validate: {
            validator: function (v) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); 
            },
            message: (props) => `${props.value} is not a valid email address!`,
        },
    },
    password: {
        type: String,
        required:true,
    },
}, {
    timestamps: true ,
    versionKey:false,
});

const userModel = mongoose.model('User', dataSchema);
module.exports = userModel;

var jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userModel = require("../models/userModel");
const cloudinary = require("../middlewares/cloudinary");

exports.registration = async (req) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    let reqBody = {
      image: req.body.image,
      fullName: req.body.fullName,
      userName: req.body.userName,
      email: req.body.email,
      password: hashedPassword,
    };
    await userModel.create(reqBody);
    return { status: "success", message: "User SignUp Successfull" };
  } catch (e) {
    return { status: "fail", message: e };
  }
};

// user log_in
exports.login = async (req) => {
  try {
    let email = req.body.email;
    let data = await userModel.aggregate([{ $match: { email: email } }]);
    if (data.length > 0) {
      const isValidPass = await bcrypt.compare(
        req.body.password,
        data[0].password
      );
      if (isValidPass == true) {
        let token = jwt.sign(
          {
            user_id: data[0]._id,
            user_fullName: data[0].fullName,
            email: data[0].email,
          },
          process.env.AUTH_KEY,
          { expiresIn: "1h" }
        );
        return { status: "success", token: token, message: "Login Success" };
      } else {
        return { status: "fail", message: "Password is wrong" };
      }
    } else {
      return { status: "fail", message: "User Not found" };
    }
  } catch (e) {
    return { status: "fail", message: "Login Faild" };
  }
};


// user update

exports.UpadateProfile = async (req) => {
  try {
    let email = req.email;
    let user = await userModel.findOne({ email: email });
    if (!user) {
      return { status: "fail", message: "User not found" };
    }
    let reqBody = {
      image: req.body.image,
      fullName: req.body.fullName,
      userName: req.body.userName,
      email: req.body.email,
    };
    if (req.file && req.file.path) {
      let result = await cloudinary.uploader.upload(req.file.path);
      reqBody.image = result.secure_url;
    }
    if (req.body.password) {
      if (!req.body.oldPassword) {
        return { status: "fail", message: "Old password is required" };
      }
      const isMatch = await bcrypt.compare(req.body.oldPassword, user.password);

      if (!isMatch) {
        return { status: "fail", message: "Old password is incorrect" };
      }
      reqBody.password = await bcrypt.hash(req.body.password, 10);
    }

    let data = await userModel.updateOne({ email: email }, reqBody, {
      $set: reqBody,
    });
    return { status: "success", data: "Update Profile Successfully" };
  } catch (e) {
    return { status: "fail", data: "something went wrong" };
  }
};

// user get

exports.UserProfileDetails = async (req) => {
  try {
    let email = req.email;
    let data = await userModel.aggregate([
      { $match: { email: email } },
      {
        $project: { image: 1, email: 1, fullName: 1, userName: 1, image: 1 },
      },
    ]);
    return { status: "success", data: data };
  } catch (e) {
    return { status: "fail", message: e };
  }
};

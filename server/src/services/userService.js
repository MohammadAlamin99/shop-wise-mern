var jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userModel = require("../models/userModel");

exports.registration = async (req) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    let reqBody = {
      image:req.body.image,
      fullName: req.body.fullName,
      userName: req.body.fullName,
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
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    let reqBody = {
      image: req.body.image,
      fullName: req.body.fullName,
      userName: req.body.userName,
      email: req.body.email,
      password: hashedPassword,
    };
    let data = await userModel.updateOne({ email: email }, reqBody);
    return { status: "success", data: data };
  } catch (e) {
    console.log(e);
    return { status: "fail", message: e };
  }
};

// user get
exports.UserProfileDetails = async (req) => {
  try {
    let email = req.email;
    let data = await userModel.aggregate([
      { $match: { email: email } },
      {
        $project: { image:1, email: 1, fullName: 1, userName: 1, image: 1, password: 1 },
      },
    ]);
    return { status: "success", data: data };
  } catch (e) {
    return { status: "fail", message: e};
  }
};

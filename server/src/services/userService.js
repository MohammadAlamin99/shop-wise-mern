var jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userModel = require("../models/userModel");

exports.registration = async (req) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    let reqBody = {
      fullName: req.body.fullName,
      userName: req.body.fullName,
      email: req.body.email,
      password: hashedPassword,
    };
    let data = await userModel.create(reqBody);
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

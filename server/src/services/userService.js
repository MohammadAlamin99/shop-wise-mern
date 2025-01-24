var jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

exports.registration = async (req) => {
  try {
    let reqBody = req.body;
    let data = await userModel.create(reqBody);
    return { status: "success", message: data };
  } catch (e) {
    return { status: "fail", message: e };
  }
};

// user log_in
exports.login = async (req) => {
  try {
    let reqBody = req.body;

    let data = await userModel.aggregate([
      { $match: reqBody },
      { $project: { password: 0 } },
    ]);
    if (data.length > 0) {
      let token = jwt.sign(
        {
          user_id: data[0]._id,
          user_fullName: data[0].fullName,
          email: data[0].email,
        },
        process.env.AUTH_KEY || "hello1234",
        { expiresIn: "1h" }
      );
      return { status: "success", token: token, message: "Login Success" };
    } else {
      return { status: "fail", message: "User Not found" };
    }
  } catch (e) {
    console.log(e);
    return { status: "fail", message: "Login Faild" };
  }
};

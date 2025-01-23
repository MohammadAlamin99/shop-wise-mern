const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    let token = req.headers.token;
    jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
      if (err) {
        return res.status(201).json({ status: "unathurized" });
      } else {
        const { user_id, user_fullName, email } = decoded;
        req.user_id = user_id;
        req.user_fullName = user_fullName;
        req.email = email;
        next();
      }
    });
  } catch {
    next("authentication failed");
  }
};

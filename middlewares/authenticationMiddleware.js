const jwt = require("jsonwebtoken");
const User = require("../model/user");

const authenticationMiddleware = (userType) => {
  return async (req, res, next) => {
    try {
      const authHeader = req.headers.authorization;

      if (!authHeader || !authHeader.startsWith("Bearer ")) {
        res.status(401).json({ msg: "bad request" });
      }

      const token = authHeader.split(" ")[1];

      const { name, id, userMode } = await jwt.verify(
        token,
        process.env.JWT_SECRET
      );
      if (userType) {
        console.log("there is user type")
        const user = await User.findById(id);
        const isValidUserMode = userType === userMode;
        if (!user.userType.includes(userType) || !isValidUserMode) {
          res.status(401).json({ msg: "Invalid user type or mode" });
        }
      }
      console.log('there is no user type')
      req.user = { name, id, userMode };
      next();
    } catch (error) {
      console.error(error);
    }
  };
};

module.exports = authenticationMiddleware;

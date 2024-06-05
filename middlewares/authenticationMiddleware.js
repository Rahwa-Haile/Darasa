const jwt = require("jsonwebtoken");

const authenticationMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      res.status(401).json({ msg: "bad request" });
    }

    const token = authHeader.split(" ")[1];

    const { name, id } = await jwt.verify(token, process.env.JWT_SECRET);

    req.user = { name, id };
    next();
  } catch (error) {
    console.error(error);
  }
};

module.exports = authenticationMiddleware;

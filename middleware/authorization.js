const jwt = require("jsonwebtoken");

const authorization = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    res.status(401).json({ message: "Please provide token" });
  }

  jwt.verify(token.split(" ")[1], process.env.JWT_SECRETE, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Failed to authenticate token" });
    }

    res.userId = decoded.userId;
    next();
  });
};

module.exports = authorization;

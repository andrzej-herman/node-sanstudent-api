const jwt = require("jsonwebtoken");

const protected = (req, res, next) => {
  const token = req.header("sanstudent-auth-token");
  if (!token) return res.status(401).send("ACCESS_DENIED");
  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(401).send("ACCESS_DENIED");
  }
};

module.exports = protected;

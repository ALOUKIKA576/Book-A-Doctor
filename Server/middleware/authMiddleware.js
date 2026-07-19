const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  try {

    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).send({
        success: false,
        message: "Authentication Failed",
      });
    }

    // Remove "Bearer "
    const token = authHeader.split(" ")[1];

    const decode = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    req.body.userId = decode.id;

    next();

  } catch (error) {

    console.log(error);

    res.status(401).send({
      success: false,
      message: "Authentication Failed",
    });

  }
};

module.exports = authMiddleware;
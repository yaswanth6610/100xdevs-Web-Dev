const jwt = reuire("jsonwebtoken");
const jwt_SECRET = "nothinghard";

function auth(req, res, next) {
  const token = req.headers.token;

  const decodedData = jwt.verify(token, jwt_SECRET);

  if (decodedData) {
    req.userId = decodedData.id;
    next();
  } else {
    res.status(403).json({
      message: "Incorrent credentials",
    });
  }
}

module.export = { auth, jwt_SECRET };

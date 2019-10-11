const jwt = require("jsonwebtoken");

function auth (req, res, next) {
    const token = req.header("auth-token");
    if (!token) return res.status(401).send("Not Authorized");

    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    if (!verified) return res.status(401).send("Invalid token");
    
    req.user = verified;

    next();
}

modules.exports = auth;
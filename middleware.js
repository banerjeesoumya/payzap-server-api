const jwt = require("jsonwebtoken")
require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET;

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization
    const word = authHeader.split(" ");
    if (!authHeader || word[0] != 'Bearer') {
        return res.status(403).json({});
    }

    const token = word[1];
    try {
        const decoded = jwt.verify(token, JWT_SECRET);

        req.userID = decoded.userID;

        next();
    } catch (err) {
        return res.status(403).json({
            message : "User doesn't exist"
        })
    }
};

module.exports = {
    authMiddleware
}
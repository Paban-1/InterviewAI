const jwt = require("jsonwebtoken")
const tokenBlackListModel = require("../models/blackList.model")

async function authUser(req, res, next) {
    const token = req.cookies.token

    if (!token) {
        return res.status(401).json({
            message: "Token not Provided."
        })
    }

    const isTokenBlackListed = await tokenBlackListModel.findOne({
        token
    })

    if (isTokenBlackListed) {
        return res.status(401).json({
            message: "User Not authorized"
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded
        next()
    } catch (err) {
        return res.status(401).json({
            message: "Invalid token",
            ERROR: err.message
        })
    }
}

module.exports = {
    authUser
}
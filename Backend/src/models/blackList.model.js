const mongoose = require("mongoose")

const tokenBlackListSchema = new mongoose.Schema({
    token: {
        type: String,
        required: [true, "Token is required to blackList"],
        unique: [true, "Token already exists in blackList"],
    },
}, { timestamps: true })

tokenBlackListSchema.index({ createdAt: 1 }, {
    expireAfterSeconds: 30 * 60 * 24 * 3 // 3 Days
})

const tokenBlackListModel = mongoose.model("tokenBlackList", tokenBlackListSchema)

module.exports = tokenBlackListModel
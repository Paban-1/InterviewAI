const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: [true, "User Name already taken"],
        required: [true, "User Name is Required to Create an User"]
    },
    email: {
        type: String,
        unique: [true, "Account already exists with this email address"],
        required: [true, "Email should be needed to Create a User"]
    },
    password: {
        type: String,
        required: true,
    }
})

const userModel = mongoose.model("user", userSchema)
module.exports = userModel
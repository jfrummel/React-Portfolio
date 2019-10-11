const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        minlength: 5,
        maxlength: 255,
        unique: true,
        required: true
    },
    password: {
        type: String,
        minlength: 8,
        maxlength: 1024,
        required: true
    }
});

const User = mongoose.model("User", userSchema);



module.exports.User = User;

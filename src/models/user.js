const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    LastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    mobile: { type: Number, required: false },
    password: { type: String, required: true },
    img: { type: String, required: false },
    follower: { type: Number, required: false, default: 0 },
    following: { type: Number, required: false, default: 0 },
},
    {
        versionKey: false,
        timestamps: true
    });

const User = mongoose.model("user", UserSchema);
module.exports = User;


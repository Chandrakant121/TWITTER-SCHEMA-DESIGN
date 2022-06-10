const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    userID: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
    img: { type: String, required: false },
    discription: { type: String, required: false, default: "" },
    likes: { type: Number, required: false, default: 0 },
    comments: { type: Number, required: false, default: 0 }
}, {
    versionKey: false,
    timestamps: true
});

const Post = mongoose.model("post", postSchema);
module.exports = Post;
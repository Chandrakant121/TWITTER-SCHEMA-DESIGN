const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    description: { type: String, required: true },
    userID: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
    postID: { type: mongoose.Schema.Types.ObjectId, ref: "post", required: true },
    likes: { type: Number, required: false, default: 0 }
}, {
    versionKey: false,
    timestamps: true
});

const Comment = mongoose.model("comment", commentSchema);
module.exports = Comment;

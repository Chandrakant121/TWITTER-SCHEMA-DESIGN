const mongoose = require("mongoose");

const followSchema = new mongoose.model({
    followerId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
    followingId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
}, {
    versionKey: false,
    timestamps: true
});

const Follow = mongoose.model("follow", followSchema);
module.exports = Follow;
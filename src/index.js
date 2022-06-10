const express = require("express");
const app = express();
app.use(express.json());
const connect = require("./config/db.js");

const userController = require("./controller/user");
// const follwController = require("./controller/follower");
const postController = require("./controller/post");
const commentsController = require("./controller/comment");

app.use("/user", userController);
// app.use("/follow", follwController);
app.use("/post", postController);
app.use("/comments", commentsController)

app.listen(1234, async () => {
    try {
        await connect();
        console.log("listing on port 1234")
    } catch (error) {
        console.log("error")
    }
});

module.exports = app;
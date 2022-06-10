const express = require("express");
const router = express.Router();
const Post = require("../models/post");

router.get("/:id", async (req, res) => {
    try {
        const posts = await Post.find(req.params.id).lean().exec();
        return res.status(200).send(posts);
    } catch (error) {
        return res.status(500).send("error");
    }
});
router.get("user/:id", async (req, res) => {
    try {
        const posts = await Post.find({ userId: req.params.id }).lean().exec();
        return res.status(200).send(posts);
    } catch (error) {
        return res.status(500).send("error");
    }
});
router.post("", async (req, res) => {
    try {
        const posts = await Post.create(req.body);
        return res.status(201).send(posts);
    } catch (error) {
        return res.status(500).send("error");
    }
});
router.patch("/:id", async (req, res) => {
    try {
        const posts = await Post.findByIdAndUpadate(req.params.id, req.body);
        return res.status(201).send(posts);
    } catch (error) {
        return res.status(500).send("error");
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const posts = await Post.findByIdAndDelete(req.params.id);
        return res.status(201).send(posts);
    } catch (error) {
        return res.status(500).send("error");
    }
});

module.exports = router;
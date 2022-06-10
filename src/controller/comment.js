const express = require("express");
const router = express.Router();
const Comment = require("../models/comments")

//=================Get=======================

router.get(":/id", async (req, res) => {
    try {
        const comments = await Comment.find({ id: req.params.id }).lean().exec()
        return res.status(200).send(comments)
    }
    catch (err) {
        return res.status(500).send("error")
    }
})

//======================post======================

router.post("", async (req, res) => {
    try {
        const comments = await Comment.create(req.body)
        return res.status(500).send(comments)
    }
    catch (err) {
        return res.status(500).send("error")
    }
})

//==========================patch===============================

router.patch("/:id", async (req, res) => {
    try {
        commnets = await Comment.findByIdAndUpdat(req.params.id, req.body)
        return res.status(500).send(comments)
    }
    catch (err) {
        return res.status(500).send("error")
    }
})

//==============================delete==========================


router.delete("/:id", async (req, res) => {
    try {
        const comments = await Comment.findByIdAndDelete(req.params.id);
        return res.status(201).send(comments);
    } catch (error) {
        return res.status(500).send("error");
    }
});
module.exports = router;


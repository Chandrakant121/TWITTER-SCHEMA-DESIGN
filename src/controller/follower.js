const express = require('express');

const router = express.Router();
const Follow = require("../models/follow");

router.get("follower/:id", async (req, res) => {
    try {
        const follow = await Follow.find({ following: req.params.id }).lean().exec();
        return res.status(200).send(follow);
    } catch (error) {
        return res.status(500).send("error");
    }
});
router.get("following/:id", async (req, res) => {
    try {
        const follow = await Follow.find({ follower: req.params.id }).lean().exec();
        return res.status(200).send(follow);
    } catch (error) {
        return res.status(500).send("error");
    }
});

router.post("", async (req, res) => {
    try {
        const follow = await Follow.create(req.body);
        return res.status(201).send(follow);
    } catch (error) {
        return res.status(500).send("error");
    }
});

module.exports = router;
const express = require("express");
const router = express.Router();
const User = require("../models/user");

//========================Get=========================
router.get("", async (req, res) => {
    try {
        const user = await User.find().lean().exec();
        return res.status(200).send(user);
    } catch (error) {
        return res.status(500).send("error");
    }
});
//===========================get by id========================
router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id).lean().exec();
        return res.status(200).send(user);
    } catch (error) {
        return res.status(500).send("error");
    }
});

//=========================post=================================
router.post("", async (req, res) => {
    try {
        const user = await User.create(req.body);
        return res.status(201).send(user);
    } catch (error) {
        return res.status(500).send("error");
    }
});

//==================================Patch===========================
router.patch("/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndUpadate(req.params.id, req.body);
        return res.status(201).send(user);
    } catch (error) {
        return res.status(500).send("error");
    }
});

//================================delete===========================
router.delete("/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        return res.status(201).send(user);
    } catch (error) {
        return res.status(500).send("error");
    }
});
module.exports = router;
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const { User } = require("../models/user");
const { validateUser } = require("../validation");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
    const { error } = await validateUser(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const userExists = await User.findOne({username: req.body.username});
    if(userExists) return res.status(400).send("Username already added");

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = new User({ username: req.body.username, password: hashedPassword });
    await user.save();
    res.send(user);
});

router.post("/login", async (req, res) => {
    const { error } = await validateUser(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const user = await User.findOne({username: req.body.username});
    if(!user) return res.status(400).send("Username and/or Password invalid");

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if(!validPassword) return res.status(400).send("Username and/or Password invalid");

    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
    res.header("auth-token", token).status(200).send(user);
    
});

module.exports = router;
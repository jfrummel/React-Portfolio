const express = require("express");
const cors = require("cors");
const skills = require("../routes/skills");
const users = require("../routes/users");

module.exports = function(app) {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cors());
    app.use("/api/skills", skills);
    app.use("/api/users", users);
};


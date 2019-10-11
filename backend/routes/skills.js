const express = require("express");
const router = express.Router();
const { Skill } = require("../models/skill");
const { validateSkill } = require("../validation");

router.get("/", async (req, res) => {
    const skills = await Skill.find().sort("name");
    if (!skills) return res.status(400).send("No skills found");

    res.send(skills);
});

router.post("/", async (req, res) => {
    const { error } = validateSkill(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const skillExists = await Skill.findOne({name: req.body.name});
    if(skillExists) return res.status(400).send("Skill already added");

    const skill = new Skill({ name: req.body.name });
    await skill.save();
    res.send(skill);
});

router.put("/:id", async (req, res) => {
    const { error } = await  validateSkill(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const skill = await Skill.findByIdAndUpdate(req.params.id, {
        name: req.body.name
    });

    if (!skill) return res.status(400).send("Skill not found");
    res.send(skill);
});

router.delete("/:id", async (req, res) => {
    const skill = await Skill.findByIdAndRemove(req.params.id);
    if (!skill) return res.status(400).send("Skill not found");
    res.send(skill);
});

module.exports = router;
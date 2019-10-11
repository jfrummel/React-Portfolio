const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 250
    }
});

const Skill = mongoose.model("Skill", skillSchema);



module.exports.Skill = Skill;


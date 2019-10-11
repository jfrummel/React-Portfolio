const Joi = require("@hapi/joi");

const validateUser = data => {
    const schema = Joi.object({
        username: Joi.string().min(3).max(250).required(),
        password: Joi.string().min(5).required()
    });
    return Joi.validate(data, schema);
};

const validateSkill = skill => {
    const schema = {
        name: Joi.string().min(3).max(250).required()
    }
    return Joi.validate(skill, schema);
};




module.exports.validateUser = validateUser;
module.exports.validateSkill = validateSkill;
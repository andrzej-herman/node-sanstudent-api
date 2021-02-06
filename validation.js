const Joi = require("@hapi/joi");

// ! REGISTER
const registerValidation = (data) => {
  const schema = Joi.object({
    firstname: Joi.string().required().min(2),
    lastname: Joi.string().required().min(2),
    email: Joi.string().required().min(6).email(),
    password: Joi.string().required().min(6),
    activationcode: Joi.required(),
  });
  const validation = schema.validate(data);
  return validation;
};

// ! LOGIN
const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().required().min(6).email(),
    password: Joi.string().required(),
  });
  const validation = schema.validate(data);
  return validation;
};

// ! CODE
const codeValidation = (data) => {
  const schema = Joi.object({
    value: Joi.string().required(),
  });
  const validation = schema.validate(data);
  return validation;
};

// ! SEASON
const seasonValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().required(),
  });
  const validation = schema.validate(data);
  return validation;
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
module.exports.codeValidation = codeValidation;
module.exports.seasonValidation = seasonValidation;

const Joi = require('@hapi/joi')

const schemaRegister = Joi.object({
  name: Joi.string().min(3).max(15).required(),
  lastname: Joi.string().min(3).max(50).required(),
  email: Joi.string().min(6).max(50).required().email(),
  password: Joi.string().min(8).max(1024).required()
})

module.exports = schemaRegister

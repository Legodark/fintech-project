const Joi = require('@hapi/joi')

const schemaLogin = Joi.object({

  email: Joi.string().min(6).max(50).required().email(),
  password: Joi.string().min(8).max(1024).required()

})

module.exports = schemaLogin

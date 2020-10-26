const mongoose = require('mongoose')

const userSchema = mongoose.Schema({

  name: { type: String, required: true, min: 3, max: 15},
  lastname: { type: String, required: true, min: 3, max: 50 },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, min: 8, max: 1024 },
  enabled: { type: Boolean, default: true },
  date: { type: Date, default: Date.now}

})

module.exports = userSchema

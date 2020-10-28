const mongoose = require('mongoose')

const movesSchema = mongoose.Schema({

  userID: { type: String, required: false},
  quantity: { type: Number, required: true},
  description: { type: String, required: true, max: 100 },
  category: { type: String, required: true},
  type: {type: String, required: true},
  date: { type: Date, default: Date.now},
  enabled: { type: Boolean, default: true },
  image: {type: String, required: false, max: 200}

})

module.exports = movesSchema

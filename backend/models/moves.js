const mongoose = require('mongoose')
const movesSchema = require('./schemas/moves')
const MovesModel = mongoose.model('moves', movesSchema)

module.exports = MovesModel

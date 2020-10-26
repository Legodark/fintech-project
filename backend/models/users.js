const mongoose = require('mongoose')
const userSchema = require('./schemas/users')
const UserModel = mongoose.model('users', userSchema)

module.exports = UserModel

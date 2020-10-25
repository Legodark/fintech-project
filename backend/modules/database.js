const router = require('express').Router()
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

// Conexión a Base de datos
async function connectionDatabase(){

  const dataBase = `mongodb+srv://${process.env.USERDB}:${process.env.PASSWORD}@finsave.twq0i.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;
  const options = { useNewUrlParser: true, useUnifiedTopology: true }
  
    try {
      await mongoose.connect(dataBase, options)
      console.log('Base de datos conectada')
    }
    catch(error){ console.log('error db:', error)}
  
  }
  
  connectionDatabase()

  module.exports = router
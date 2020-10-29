const config = require('../modules/config')
const jwt = require('jsonwebtoken')

  const verifyToken = async(req,res,next) => {

    if(!req.token) return res.status(401).json({ error: 'Acceso denegado'})

    try{

      const verification = await jwt.verify(req.token, config.TOKEN_SECRET)

      req.user = verification

      next()

    }
    catch(error){
      res.status(400).json({error: 'token invalido'})
    }

  }

module.exports = verifyToken

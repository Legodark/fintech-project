const router = require('express').Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const schemaRegister = require('../models/validations/validateRegister')
const schemaLogin = require('../models/validations/validateLogin')

const User = require('../models/users')


router.post('/login', async(req,res) => {

  // Validacion de Usuario

  const { error } = schemaLogin.validate(req.body)
  if (error) return res.status(400).json({ error: error.details[0].message })

  const user = await User.findOne({email: req.body.email})
  if(!user) return res.status(400).json({error: true, mensage: 'Credenciales erroneas'})

  // Comparamos la contraseña para validarla

  const validatePassword = await bcrypt.compare(req.body.password, user.password)
  if(!validatePassword) return res.status(400).json({error: true, mensage: 'Credenciales erroneas'})

  // Creamos el token

  const token = jwt.sign({

    name: user.name,
    id: user._id,
  }, process.env.TOKEN_SECRET)


  res.header('auth-token', token).json({
    error: null,
    data: {token}
  })
})



router.post('/register', async(req,res) => {

    // Validacion de Registro

    const { error } = schemaRegister.validate(req.body)
    if (error) return res.status(400).json({ error: error.details[0].message })


    const uniqueEmail = await User.findOne({email: req.body.email})
    if (uniqueEmail) return res.status(400).json({ error: true, message: 'Este email ya esta registrado'})

    // Encriptación de la contraseña

    const salt = await bcrypt.genSalt(10)
    const password = await bcrypt.hash(req.body.password, salt)


    const user = new User({
      name: req.body.name,
      lastname: req.body.lastname,
      email: req.body.email,
      password


    })

    try{

      const userDB = await user.save()

      res.json({
        error: null,
        data: userDB
      })

    }
    catch(error){
      res.status(400).json(error)

    }



})

module.exports = router

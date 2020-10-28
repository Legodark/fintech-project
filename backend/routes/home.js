const router = require('express').Router()

router.get ("/", (req,res) => {

  res.send("Hola soy el servidor de Backend de FINSAVE")

})

module.exports = router

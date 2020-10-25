const router = require('express').Router()

router.get ("/", (req,res) => {

  res.send("Hola soy el servidor de Backend")

})

module.exports = router
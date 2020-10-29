const router = require('express').Router()
const verificacion = require('../middlewares/validate-token')

router.get('/', verificacion, (req, res) => {

  res.json({

    error: null,
    data: {
      title: 'Estas accediendo a una ruta protegida',
      user: req.user
    }

  })

})

module.exports = router

const router = require('express').Router()

router.get('/', (req, res) => {

  res.json({

    error: null,
    data: {
      title: 'Estas accediendo a una ruta protegida',
      user: req.user
    }

  })

})

module.exports = router

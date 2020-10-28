const router = require('express').Router()
const jwt = require('jsonwebtoken')

const Move = require('../models/moves')

router.get('/listmoves/:id', async(req, res) => {

  let searchIdUser = req.params.id
  let idUser = { userID: searchIdUser }

  let foundIdMove = await Move.find(idUser).exec()
  delete foundIdMove.enabled

  res.json(foundIdMove)
})

router.post('/entry', async (req,res) => {

 let token = req.headers.authorization.split(" ")[1]
 let userID = jwt.decode(token, process.env.TOKEN_SECRET)



 const move = new Move({
  userID: userID.id,
  quantity: req.body.quantity,
  description: req.body.description,
  category: req.body.category,
  type: req.body.type,
  image: req.body.image

})

  try{
  const moveDB = await move.save()

  res.json({
    moveDB
  })
  }
  catch(error){
    res.status(400).json({ message: e.message })
  }

})

router.patch('/:id', async(req, res) => {

  let searchId = req.params.id
  let filters = { _id: searchId }

  const move = {
    quantity: req.body.quantity,
    description: req.body.description,
    category: req.body.category,
    type: req.body.type,
    image: req.body.image
  }

  try {

    let foundItem = await Move.findOneAndUpdate(filters, move, { new: true }).exec()

    let foundMove = foundItem.toJSON()

    res.json(foundMove)
} catch (e) {
    res.status(400).json({ message: e.message })
}

}),

router.delete('/:id', async(req, res) => {

  let searchId = req.params.id
  let idMove = { _id: searchId }

  try{

  let deleteIdMove = await Move.findByIdAndDelete(idMove).exec()

  res.json({
    message: `El movimiento con id:${deleteIdMove._id} ha sido eliminado satisfactoriamente`
  })
  }
  catch(error){
    res.status(400).json({message: 'El movimiento no se ha podido borrar'})
  }
})

module.exports = router

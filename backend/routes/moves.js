const router = require('express').Router()
const verification = require('../middlewares/validate-token')

const Move = require('../models/moves')

router.get('/listmoves', verification, async(req, res) => {

  let searchIdUser = req.user.id
  let idUser = { userID: searchIdUser }

  let foundIdMove = await Move.find(idUser).exec()
  delete foundIdMove.enabled

  res.json(foundIdMove)
})

router.post('/entry', verification,  async (req,res) => {

 const move = new Move({
  userID: req.user.id,
  quantity: req.body.quantity,
  description: req.body.description,
  category: req.body.category,
  type: req.body.type,
  image: req.body.image

})

  try{
  const moveDB = await move.save()

  res.json(moveDB)

  }
  catch(error){
    res.status(400).json({ message: e.message })
  }

})

router.patch('/update', verification, async(req, res) => {

  let searchId = req.body.id
  console.log(searchId);

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

router.delete('/delete/:id', verification, async(req, res) => {

  let searchId = req.params.id
  let idMove = { _id: searchId }
  console.log(idMove);
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

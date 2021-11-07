import express from 'express'
const router = express.Router()

import Buy from '../models/Buy.js'

//@GET - /api/buys - get all buys
router.get('/', async (req, res) => {
  try {
    const buys = await Buy.find()
    res.json(buys)
  } catch (err) {
    res.status(500).send('server error')
  }
})

//@POST - /api/buys - create a new buy
router.post('/', async (req, res) => {
  const buy = new Buy(req.body)
  try {
    await buy.save()
    res.status(201).send(buy)
  } catch (err) {
    res.status(400).send(err)
  }
})

//@GET - /api/buys/:id - get a buy by id
router.get('/:id', async (req, res) => {
  try {
    const buy = await Buy.findById(req.params.id)
    res.json(buy)
  } catch (err) {
    res.status(500).send('server error')
  }
})

//@GET - /api/buys/name - search by name not case sensitive
router.get('/name/:name', async (req, res) => {
  try {
    const buy = await Buy.find({
      name: { $regex: req.params.name, $options: 'i' },
    })
    res.json(buy)
  } catch (err) {
    res.status(500).send('server error')
  }
})

//@GET - /api/buys/symbol - search by symbol not case sensitive
router.get('/symbol/:symbol', async (req, res) => {
  try {
    const buy = await Buy.find({
      symbol: { $regex: req.params.symbol, $options: 'i' },
    })
    res.json(buy)
  } catch (err) {
    res.status(500).send('server error')
  }
})

//@PUT - /api/buys/:id - update a buy by id
router.put('/:id', async (req, res) => {
  try {
    const buy = await Buy.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })
    res.json(buy)
  } catch (err) {
    res.status(500).send('server error')
  }
})

//@DELETE - /api/buys/:id - delete a buy by id
router.delete('/:id', async (req, res) => {
  try {
    await Buy.findByIdAndDelete(req.params.id)
    res.json({
      message: 'buy deleted',
    })
  } catch (err) {
    res.status(500).send('server error')
  }
})

export default router

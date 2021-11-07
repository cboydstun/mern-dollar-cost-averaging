import express from 'express'
const router = express.Router()

import Stock from '../models/Stock.js'

//@GET - /api/stocks  - get all stocks
router.get('/', async (req, res) => {
  try {
    const stocks = await Stock.find()
    res.json(stocks)
  } catch (err) {
    res.status(500).send(err)
  }
})

//@POST - /api/stocks  - create a new stock
router.post('/', async (req, res) => {
  const stock = new Stock({
    name: req.body.name,
    symbol: req.body.symbol,
  })
  try {
    const newStock = await stock.save()
    res.json(newStock)
  } catch (err) {
    res.status(400).send(err)
  }
})

//@GET - /api/stocks/:id  - get a stock by id
router.get('/:id', async (req, res) => {
  try {
    const stock = await Stock.findById(req.params.id)
    res.json(stock)
  } catch (err) {
    res.status(500).send(err)
  }
})

//@GET - api/stocks/name - get a stock by name
router.get('/name/:name', async (req, res) => {
  try {
    const stock = await Stock.findOne({ name: req.params.name })
    res.json(stock)
  } catch (err) {
    res.status(500).send(err)
  }
})

//@DELETE - /api/stocks/:id  - delete a stock by id
router.delete('/:id', async (req, res) => {
  try {
    const stock = await Stock.findByIdAndDelete(req.params.id)
    res.status(200).json(`${stock.name} deleted`)
  } catch (err) {
    res.status(500).send(err)
  }
})

//@PUT - /api/stocks/:id  - update a stock by id
router.put('/:id', async (req, res) => {
  try {
    const stock = await Stock.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
    res.json(stock)
  } catch (err) {
    res.status(500).send(err)
  }
})

export default router

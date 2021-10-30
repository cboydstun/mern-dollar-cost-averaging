import express from 'express'
const router = express.Router()

import Stock from '../models/Stock.js'

//@GET - /api/stocks  - get all stocks
router.get('/', async (req, res) => {
  try {
    const stocks = await Stock.find()
    res.json(stocks)
  } catch (err) {
    res.status(500).send('server error')
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
    res.status(400).send('error saving stock')
  }
})

//@GET - /api/stocks/:id  - get a stock by id
router.get('/:id', async (req, res) => {
  try {
    const stock = await Stock.findById(req.params.id)
    res.json(stock)
  } catch (err) {
    res.status(500).send('server error')
  }
})

//@DELETE - /api/stocks/:id  - delete a stock by id
router.delete('/:id', async (req, res) => {
  try {
    const stock = await Stock.findByIdAndDelete(req.params.id)
    res.json(stock)
  } catch (err) {
    res.status(500).send('server error')
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
    res.status(500).send('server error')
  }
})

export default router

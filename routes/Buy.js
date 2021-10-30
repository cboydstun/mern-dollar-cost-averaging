import express from 'express'
const router = express.Router()

import Todo from '../models/Buy.js'

//@GET - /api/todos - get all todos from user - Private
router.get('/', async (req, res) => {
  try {
  } catch (err) {
    res.status(500).send('server error')
  }
})

export default router

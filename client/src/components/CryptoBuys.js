import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Buys from './Buys'

export default function CryptoBuys() {
  const [name, setName] = useState('')
  const [symbol, setSymbol] = useState('')
  const [quantity, setQuantity] = useState('')
  const [cost, setCost] = useState('')
  const [date, setDate] = useState('')
  const [buys, setBuys] = useState([])

  useEffect(() => {
    axios
      .get('/api/buys')
      .then((res) => {
        setBuys(res.data)
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const addBuy = () => {
    axios
      .post('/api/buys', {
        name: name,
        symbol: symbol,
        quantity: quantity,
        cost: cost,
        date: date,
      })
      .then((res) => {
        setBuys([...buys, res.data])
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const updateBuy = (id) => {
    axios
      .put(`/api/buys/${id}`, {
        name: name,
        symbol: symbol,
        quantity: quantity,
        cost: cost,
        date: date,
      })
      .then((res) => {
        setBuys(buys.map((buy) => (buy._id === id ? res.data : buy)))
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const deleteBuy = (id) => {
    axios
      .delete(`/api/buys/${id}`)
      .then((res) => {
        setBuys(buys.filter((buy) => buy._id !== id))
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div>
      <h1>Crypto Buys</h1>
      <div>
        <div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor="symbol">Symbol</label>
            <input
              type="text"
              className="form-control"
              id="symbol"
              value={symbol}
              onChange={(e) => setSymbol(e.target.value)}
            />

            <label htmlFor="quantity">Quantity</label>
            <input
              type="text"
              className="form-control"
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />

            <label htmlFor="cost">Cost</label>
            <input
              type="text"
              className="form-control"
              id="cost"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
            />

            <label htmlFor="date">Date</label>
            <input
              type="text"
              className="form-control"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />

            <button className="btn btn-primary" onClick={addBuy}>
              Add Buy
            </button>
          </div>
        </div>
      </div>
      <Buys buys={buys} updateBuy={updateBuy} deleteBuy={deleteBuy} />
    </div>
  )
}

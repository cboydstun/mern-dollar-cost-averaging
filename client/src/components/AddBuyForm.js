import React, { useState, useContext } from 'react';
import {v4 as uuidv4} from 'uuid'

import { AppContext } from '../context/AppContext'

export default function AddBuyForm() {
    const {addBuy} = useContext(AppContext)
    
    const [name, setName] = useState('')
    const [symbol, setSymbol] = useState('')
    const [cost, setCost] = useState(0)
    const [quantity, setQuantity] = useState(0)
    const [date, setDate] = useState(Date)  

    const onSubmit = (event) => {
        event.preventDefault()

        const newBuy = {
            id: uuidv4(),
            name,
            symbol,
            cost,
            quantity,
            date
        }

        addBuy(newBuy)

        setName('')
        setSymbol('')
        setCost(0)
        setQuantity(0)
        setDate(Date)
    }


    return (
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="symbol">Symbol</label>
                <input
                    type="text"
                    className="form-control"
                    id="symbol"
                    value={symbol}
                    onChange={(event) => setSymbol(event.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="cost">Cost</label>
                <input
                    type="number"
                    className="form-control"
                    id="cost"
                    value={cost}
                    onChange={(event) => setCost(event.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="quantity">Quantity</label>
                <input
                    type="number"
                    className="form-control"
                    id="quantity"
                    value={quantity}
                    onChange={(event) => setQuantity(event.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="date">Date</label>
                <input
                    type="date"
                    className="form-control"
                    id="date"
                    value={date}
                    onChange={(event) => setDate(event.target.value)}
                />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

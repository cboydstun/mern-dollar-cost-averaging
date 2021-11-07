import React from 'react'

export default function Buys({ buys, updateBuy, deleteBuy }) {
  return (
    <div>
      {buys.map((buy) => {
        return (
          <div key={buy._id}>
            <div>
              <p>{buy.name}</p>
              <p>{buy.symbol}</p>
              <p>{buy.cost}</p>
              <p>{buy.quantity}</p>
              <p>{buy.date}</p>
            </div>
            <div>
              <button onClick={() => updateBuy(buy._id)}>Edit</button>
              <button onClick={() => deleteBuy(buy._id)}>Delete</button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

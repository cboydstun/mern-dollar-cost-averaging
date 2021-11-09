import React, { useContext, useEffect, useState } from "react";

import BuyItem from "./BuyItem";

import { AppContext } from "../context/AppContext";

import { TiDelete } from "react-icons/ti";

export default function BuyList() {
  const { buys, getBuys } = useContext(AppContext);
  const [category, setCategory] = useState(null);

  useEffect(() => {
    getBuys();
  }, [setCategory]);

  console.log(buys);
  console.log(category);

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  return (
    //create drop down menu of different crypto categories to filter by
    <div className="buy-list">
      <h2>
        Buy List
        <span>
          <select onChange={handleCategory}>
            {/* <option value={null}>Select a Category</option> */}
            {/* filter `buys` to only show unique values */}
            {[...new Set(buys.map((buy) => buy.symbol))].map((buy) => (
              <option key={buy} value={buy}>
                {buy}
              </option>
            ))}
          </select>
          <TiDelete
              style={{ cursor: "pointer" }}
              onClick={() => setCategory(null)}
            />
        </span>
      </h2>
      <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Symbol</th>
                <th>Cost</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Date</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
      {/* //filter `buys` by `category` */}
      {category === null
        ? buys.map((buy) => <BuyItem key={buy.id} buy={buy} />)
        : buys
            .filter((buy) => buy.symbol === category)
            .map((buy) => <BuyItem key={buy.id} buy={buy} />)}
        </tbody>
        </table>
    </div>
  );
}

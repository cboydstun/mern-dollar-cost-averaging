import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../context/AppContext";

export default function BuyItem({ buy, key }) {
  const { deleteBuy } = useContext(AppContext);

  const border = {
    border: "1px solid #e0e0e0",
    padding: "10px",
    margin: "10px",
    borderRadius: "5px",
  };

  return (
    <tr key={key}>
      <td style={border}>{buy.name}</td>
      <td style={border}>{buy.symbol}</td>
      <td style={border}>{buy.cost}</td>
      <td style={border}>{buy.cost/buy.quantity}</td>
      <td style={border}>{buy.quantity}</td>
      <td style={border}>{buy.date}</td>

      <td style={border}>
        <TiDelete
          onClick={() => deleteBuy(buy.id)}
          style={{ cursor: "pointer" }}
        />
      </td>
    </tr>
  );
}

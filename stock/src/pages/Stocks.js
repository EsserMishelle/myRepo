/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import stocks from "../data.json";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Stocks(props) {
  const { symbol } = useParams();
  // console.log(stocks);
  const matchingStocks = stocks.filter(
    (clickedStock) => clickedStock.symbol === symbol
  );
  console.log(`The stock is ${matchingStocks[0].name}`);
  if (!matchingStocks || matchingStocks.length === 0) {
    return <div>No stocks not found</div>;
  }
  const stock = matchingStocks[0];

  return (
    <div className="stock-details-sample">
      <h2>Sample Stock Data from JSON </h2>
      <h3>Name: {stock.name}</h3>
      <h3>Price: {stock.lastPrice}</h3>
    </div>
  );
}

// export default function Stocks(props) {
//   const { symbol } = useParams();
//   // console.log(stocks);
// const stock = stocks.find((s) => s.symbol === symbol);

//   if (!stock) {
//     return <div>Stock not found</div>;
//   }

//   return (
//     <div>
//       <h1>Name: {stock.name}</h1>
//       <p>Price: {stock.lastPrice}</p>
//     </div>
//   );
// }

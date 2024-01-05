/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import stocks from "../data.json";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Dashboard(props) {
  //   console.log(stocks);
  return (
    <>
      <div className="stocks--div--json">
        <h4>Sample Data from JSON</h4>
        {stocks.map((stock) => {
          const { name, symbol, lastPrice, change, high, low, open } = stock;
          return (
            <>
              <ul>
                <li className="stocks-li" key={stock.symbol}>
                  <Link
                    to={`/stocks/sample/${stock.symbol}`}
                    className="stocks-link-li"
                  >
                    <p>{stock.name}</p>
                  </Link>
                </li>
              </ul>
            </>
          );
        })}
      </div>
      <div className="stocks--div--api">
        <hr></hr>
        <h4>Real-Time Data from API</h4>
        {stocks.map((stock) => {
          const { name, symbol, lastPrice, change, high, low, open } = stock;
          return (
            <>
              <ul>
                <li className="stocks-li" key={stock.symbol}>
                  <Link
                    to={`/stocks/real-time/${stock.symbol}`}
                    className="stocks-link-li"
                  >
                    <p>{stock.name}</p>
                  </Link>
                </li>
              </ul>
            </>
          );
        })}
      </div>
    </>
  );
}

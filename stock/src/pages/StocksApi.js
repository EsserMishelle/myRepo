import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function StocksApi(props) {
  const [stock, setStock] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // const apiKey = "HZmpbWTSvIKxPy_8Au9Bffa9v4w6ogQA"; //polygon
  // const apiKey = "U31BC80OS89UNJ2K"//Alphvantage
  // const apiKey = "85FRTN5hPRWux3uZA7weOJnTKJXQ9NyC"; //fmp
  // const apiKey = "e4cdaa4e31072f803164794b2a6d2eb5"; //marketstack
  // const apiKey = "12345";
  const params = useParams();
  const symbol = params.symbol;
  // const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol={symbol}&apikey={apiKey}`;
  // const url = `https://api.polygon.io/v1/open-close/${symbol}/2024-01-02?adjusted=true&apiKey=${apiKey}`; ////polygon --no company name

  // const url = `http://api.marketstack.com/v1/tickers/${symbol}?access_key=e4cdaa4e31072f803164794b2a6d2eb5`;

  // const url = `https://api.marketstack.com/v1/tickers/${symbol}?access_key=${apiKey}`;
  // const url = `https://financialmodelingprep.com/api/v3/search-ticker?query=${symbol}&apikey=${apiKey}`;
  // const url = `https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=&{apiKey}`;
  // const url = `https://financialmodelingprep.com/api/v3/quote/AAPL?apikey=85FRTN5hPRWux3uZA7weOJnTKJXQ9NyC`;

  // const url = `https://real-time-finance-data.p.rapidapi.com/stock-quote?symbol=${symbol}&language=en`;
  const url = `https://real-time-finance-data.p.rapidapi.com/stock-quote?symbol=${symbol}&language=en`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "53564e1c29msh0ead9632d4d17b8p1234c1jsn34d0ef81c5c0",
      "X-RapidAPI-Host": "real-time-finance-data.p.rapidapi.com",
    },
  };

  const getStock = async () => {
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      if (response.ok) {
        const { symbol, name, price } = data.data;
        console.log(data.data);
        // setStock({ symbol, name, price });
        setStock(data.data);
      } else {
        setError(`Error: ${data.status}`);
      }
    } catch (error) {
      setError(error.message);
      // console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getStock();
  }, [symbol]);

  if (loading) {
    return <p>Loading</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!stock) {
    return <p>No stock data available</p>;
  }
  const { name, price } = stock;
  return (
    <div className="stock-real-time">
      <h2>Real-Time Stock Data from API </h2>
      <h3>
        Name: {name}({symbol})
      </h3>
      <h3>Price: ${price}</h3>
    </div>
  );
}

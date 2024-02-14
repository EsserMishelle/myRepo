import React, { useState, useEffect } from "react";
import "./App.css";
import StarShipCard from "./components/StarShipCard";

function App() {
  const [ship, setShip] = useState([]);

  const getShip = async () => {
    try {
      const response = await fetch(url);
      console.log(response);
      const data = await response.json();
      console.log(data);
      setShip(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getShip();
  }, []);

  const loaded = () => {
    return (
      <>
        <h4>Starships are: </h4>
      </>
    );
  };
  const loading = () => {
    return (
      <>
        <img src="loadingSymbol.gif" alt="loading symbol" />
        <h1>Loading...</h1>
      </>
    );
  };
  return ship && ship ? loaded() : loading();
}

export default App;

// C:\Users\fille>curl https://swapi.dev/api/planets/1/
// {"name":"Tatooine","rotation_period":"23","orbital_period":"304","diameter":"10465","climate":"arid","gravity":"1 standard","terrain":"desert","surface_water":"1","population":"200000","residents":["https://swapi.dev/api/people/1/","https://swapi.dev/api/people/2/","https://swapi.dev/api/people/4/","https://swapi.dev/api/people/6/","https://swapi.dev/api/people/7/","https://swapi.dev/api/people/8/","https://swapi.dev/api/people/9/","https://swapi.dev/api/people/11/","https://swapi.dev/api/people/43/","https://swapi.dev/api/people/62/"],"films":["https://swapi.dev/api/films/1/","https://swapi.dev/api/films/3/","https://swapi.dev/api/films/4/","https://swapi.dev/api/films/5/","https://swapi.dev/api/films/6/"],"created":"2014-12-09T13:50:49.641000Z","edited":"2014-12-20T20:58:18.411000Z","url":"https://swapi.dev/api/planets/1/"}

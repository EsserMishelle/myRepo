import React, { useState, useEffect } from "react";
import AllStarships from "../services/sw-api";
import { Link } from "react-router-dom";
import "../App.css";
function StarShipCard() {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const starshipsData = await AllStarships();
        setStarships(starshipsData);
      } catch (error) {
        console.error("Error fetching starships:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="card-container">
      {starships.map((starship) => {
        const { name } = starship;
        console.log(starship);
        console.log(starship.name);
        return (
          <Link to={`/starships/${name}`} key={name} className="card-link">
            <div className="summary-small-card">
              <h2>{name}</h2>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default StarShipCard;

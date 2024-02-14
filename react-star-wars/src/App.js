/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./App.css";
import { getStarships } from "./services/sw-api_starships";
import StarShipCard from "./components/StarShipCard";

export default function App() {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    let mounted = true;
    try {
      getStarships().then((results) => {
        if (mounted) {
          console.log("loading successfully");
          console.log(results);
          console.log(results.name);
          setStarships(results);
        }
      });
    } catch (error) {
      console.error("Error fetching starships", error);
    }
    return () => (mounted = false);
  }, []);

  const cardEl = starships.map((card) => {
    return <StarShipCard key={card.name} {...card} />;
  });
  return (
    <div className="heading">
      <h4>Click on a card to toggle details</h4>
      <section className="cards-list">{cardEl}</section>
    </div>
  );
}
// return (
//   <div className="card">
//     {starships.map((starship) => {
//       const { name, model } = starship;
//       return (
//         <>
//           <StarShipCard key={starship.name} {...starship} />
//         </>
//       );
//     })}
//   </div>
// );

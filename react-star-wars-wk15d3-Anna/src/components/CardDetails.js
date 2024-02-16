import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
// import AllStarships from "../services/sw-api"; // You might not need this anymore

function CardDetails() {
  const { name } = useParams();
  const [starship, setStarship] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchStarshipByName = async (starshipName) => {
    setLoading(true);
    try {
      // Here, we'll fetch all starships and filter by name as an example workaround
      let response = await fetch(`https://swapi.dev/api/starships`);
      let data = await response.json();
      let allStarships = data.results;

      // If there's a next page, fetch those too - this is a simplified example
      // In practice, you'd want to loop through all pages
      while (data.next) {
        response = await fetch(data.next);
        data = await response.json();
        allStarships = allStarships.concat(data.results);
      }

      const selectedStarship = allStarships.find(
        (starship) => starship.name === starshipName
      );
      if (selectedStarship) {
        setStarship(selectedStarship);
      } else {
        console.error("Starship not found:", name);
      }
    } catch (error) {
      console.error("Error fetching starship:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!name) {
      console.log("Starship name is undefined");
      return; // Exit early if name is undefined
    }

    fetchStarshipByName(name).catch(console.error);
  }, [name]);

  if (loading) {
    return <div></div>;
  }

  if (!starship) {
    return <div>No starship found with the name {name}</div>;
  }

  return (
    <div>
      <h1 className="app-title">Starship Details</h1>
      <h3>Click on the card to return back</h3>
      <div className="detail-big-card">
        <Link to="/" className="back-to-list-pretend-btn">
          <h1>{starship.name}</h1>
          <h3>Crew: {starship.crew}</h3>
          <h3>Model: {starship.model}</h3>
          <h3>Passengers: {starship.passengers}</h3>
          <h3>Cargo Capacity: {starship.cargo_capacity}</h3>
        </Link>
      </div>
    </div>
  );
}

export default CardDetails;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AllStarships from "../services/sw-api";
import "../App.css";
import { Link } from "react-router-dom";

function CardDetails() {
  const { name } = useParams();
  const [starship, setStarship] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async (page) => {
      try {
        setLoading(true); // Set loading state to true
        const data = await AllStarships(page);
        console.log("Fetched data:", data);
        const starshipsData = data.starships; // Access starships data
        if (!starshipsData || starshipsData.length === 0) {
          console.error("No starships data found");
          return;
        }
        const selectedStarship = starshipsData.find(
          (starship) => starship.name === name
        );
        if (!selectedStarship) {
          console.error("Starship not found:", name);
          return;
        }
        setStarship(selectedStarship);
      } catch (error) {
        console.error("Error fetching starships:", error);
      } finally {
        setLoading(false); // Set loading state to false after fetching data
      }
    };
    //   fetchData(currentPage);
    // }, [name, currentPage]);

    fetchData();
  }, [name]);

  if (!starship) {
    return <div>Loading...</div>;
  }

  // Destructure the starship object to access its properties
  const { crew, model, passengers, cargo_capacity } = starship;

  return (
    <div>
      <h1 className="app-title">Star Wars Starship Fleet</h1>
      <h3 className="app-subtitle">Click card to return back</h3>
      <div className="detail-big-card">
        <Link to={"/"} className="card-link">
          <h1 className="detail-big-card-title">{name}</h1>
          <h3>Crew: {crew}</h3>
          <h3>Model: {model}</h3>
          <h3>Passengers: {passengers}</h3>
          <h3>Cargo Capacity: {cargo_capacity}</h3>
        </Link>
      </div>
    </div>
  );
}

export default CardDetails;

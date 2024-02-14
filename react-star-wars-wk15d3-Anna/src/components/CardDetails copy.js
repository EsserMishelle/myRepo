// CardDetails.js

import React from "react";

function CardDetails({ starship }) {
  if (!starship) {
    return <div>No Starship...</div>; // Or handle the case where starship is undefined
  }

  // Destructure the starship prop to access its properties
  const { name, crew, model, passengers, cargo_capacity } = starship;

  return (
    <>
      <h1>{name}</h1>
      <p>Crew: {crew}</p>
      <p>Model: {model}</p>
      <p>Passengers: {passengers}</p>
      <p>Cargo Capacity: {cargo_capacity}</p>
    </>
  );
}

export default CardDetails; // Exporting the CardDetails component as default

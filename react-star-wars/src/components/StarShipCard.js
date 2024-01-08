import React from "react";

export default function StartShipCard(props) {
  console.log(props);
  return (
    <>
      <div className="starship-card">
        <h3>{props.name}</h3>
        <div className="starship-details">
          <p>Model: {props.model}</p>
          {/* <p>Films: {props.films}</p> */}
          {/* <p>Class: {props.starship_class}</p> */}
          {/* <p>Passengers: {props.passengers}</p> */}
        </div>
      </div>
    </>
  );
}

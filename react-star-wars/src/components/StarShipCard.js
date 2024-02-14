import React, { useState } from "react";
import "../App.css"; // Import your CSS file

export default function StartShipCard(props) {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked(!isClicked);
  }

  return (
    <div>
      <div
        className={`starship-card ${isClicked ? "clicked" : ""}`}
        onClick={handleClick}
      >
        <div className="starship-details">
          <h3 className={`name ${isClicked ? "hidden" : ""}`}>{props.name}</h3>
          <p className={`model ${isClicked ? "" : "hidden"}`}>
            Model: {props.model}
          </p>
          <p className={`manufacturer ${isClicked ? "" : "hidden"}`}>
            Manufacturer: {props.manufacturer}
          </p>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "./style.css";
const style = require("style.css");

class Show extends React.Component {
  render() {
    const event = this.props.event;
    return (
      <>
        <div>
          <h1>Event Detail Page </h1>
          Event title:{" "}
          <span
            style={{ fontSize: "30px", fontWeight: "bolder", color: "blue" }}
          >
            {event.title}
          </span>
          <br />
          <br />
          Description: {event.description}
          <br />
          Location: {event.location}
          <br />
          Open Spots: {event.openSpots}
          <br />
          Price: ${event.price}.
          <br />
          <br />
          {event.price > 50 ? (
            <span
              style={{
                fontSize: "30px",
                fontWeight: "bolder",
                color: "red",
              }}
            >
              {/* {event.price > 50 ? (
            <span
              style={{
                fontSize: "30px",
                fontWeight: "bolder",
                color: "red",
              }}
            > */}
              It is more than $50 so it is too expensive
            </span>
          ) : (
            <span
              style={{
                fontSize: "30px",
                fontWeight: "bolder",
                color: "purple",
              }}
            >
              "It is not too expensive. We can afford it."
            </span>
          )}
        </div>
      </>
    );
  }
}

export default Show;

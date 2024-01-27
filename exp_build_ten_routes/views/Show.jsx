import React from "react";
<link rel="stylesheet" type="text/css" href="./style.css" />;
// const style = require("style.css");

class Show extends React.Component {
  render() {
    const event = this.props.event;
    return (
      <>
        <div>
          <h1>Event Detail Page </h1>
          <h3>Event title: </h3>
          <span
            style={{ fontSize: "30px", fontWeight: "bolder", color: "blue" }}
          >
            {event.title}
          </span>
          <br />
          <br />
          <h3>Description: {event.description}</h3>

          <h4>Location: {event.location}</h4>

          <h4>Open Spots: {event.openSpots}</h4>
          <h4>Price: ${event.price}.</h4>

          {event.price > 50 ? (
            <span
              className="flashing-warning"
              style={{
                fontSize: "30px",
                fontWeight: "bolder",
                color: "red",
              }}
            >
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

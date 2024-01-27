import React from "react";
// import "./style.css";

class Show extends React.Component {
  render() {
    const fruit = this.props.fruit;
    return (
      <>
        <div>
          <h1> Show Page </h1>
          The fruit:{" "}
          <span
            style={{ fontSize: "30px", fontWeight: "bolder", color: "blue" }}
          >
            {fruit.name}
          </span>
          , is {fruit.color}.{" "}
          {fruit.readyToEat ? (
            "It is ready to eat"
          ) : (
            <span
              style={{
                fontSize: "30px",
                fontWeight: "bolder",
                color: "purple",
              }}
            >
              "It is not ready to eat... Can't touch this"
            </span>
          )}
        </div>
      </>
    );
  }
}

export default Show;

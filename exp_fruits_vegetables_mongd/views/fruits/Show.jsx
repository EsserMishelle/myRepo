import React from "react";

class Show extends React.Component {
  render() {
    const fruit = this.props.fruit;
    return (
      <>
        <div>
          <h1>Show Fruit Page</h1>
          The fruits:{""}
          <span
            style={{ fontSize: "30px", fontWeight: "bolder", color: "blue" }}
          >
            {fruit.name}
          </span>
          , is {fruit.color}.{""}
          {fruit.readyToEat ? (
            " It is ready to eat"
          ) : (
            <span
              style={{
                fontSize: "30px",
                fontWeight: "bolder",
                color: "red",
              }}
            >
              " It is not ready to eat...Can't touch this"
            </span>
          )}
        </div>
      </>
    );
  }
}
export default Show;

const React = require("react");

class Show extends React.Component {
  render() {
    const vegetable = this.props.vegetable;
    return (
      <>
        <div>
          <h1>Show Vegetable Page</h1>
          The vegetables:{""}
          <span
            style={{ fontSize: "30px", fontWeight: "bolder", color: "blue" }}
          >
            {vegetable.name}
          </span>
          , is {vegetable.color}.{""}
          {vegetable.readyToEat ? (
            " It is ready to eat"
          ) : (
            <span
              className="flashing-warning"
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
        <nav>
          <a href="/vegetables">Back to Index</a>
        </nav>
      </>
    );
  }
}
export default Show;

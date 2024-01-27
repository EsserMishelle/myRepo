const React = require("react");

class New extends React.Component {
  render() {
    return (
      <div>
        <h1 style={{ display: "flex", justifyContent: "center" }}>
          Enter a new event for the travel website
        </h1>

        <form action="/events" method="POST">
          Id: <input type="text" name="id" />
          <br />
          <br />
          Title: <input type="text" name="title" />
          <br />
          <br />
          Description: <input type="text" name="description" />
          <br />
          <br />
          Price: <input type="number" name="price" />
          <br />
          <br />
          Location: <input type="text" name="location" />
          <br />
          <br />
          PenSpots: <input type="number" name="openSpots" />
          <br />
          <br />
          <input type="submit" name="" value="Create Event" />
        </form>
      </div>
    );
  }
}
module.exports = New;

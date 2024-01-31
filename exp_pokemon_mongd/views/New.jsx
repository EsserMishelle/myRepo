const React = require("react");

class New extends React.Component {
  render() {
    return (
      <div>
        <h1>New Pokemon Page</h1>
        <form action="/pokemon" method="POST">
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" />
          <br /> <br />
          <label htmlFor="img">Image URL: </label>
          <input type="text" name="img" />
          <br />
          <br />
          <input type="submit" name="" value="Create Pokemon" />
        </form>
      </div>
    );
  }
}

module.exports = New;

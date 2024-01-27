const React = require("react");

class New extends React.Component {
  render() {
    return (
      <div>
        <h1>New Vegetable Page</h1>
        <form action="/vegetables" method="POST">
          <br />
          Name: <input type="text" name="name" />
          <br />
          Color: <input type="text" name="color" />
          <br />
          Is Ready to Eat: <input type="checkbox" name="readyToEat" />
          <br />
          <input type="submit" name="" value="Create Vegetable" />
        </form>
      </div>
    );
  }
}
module.exports = New;

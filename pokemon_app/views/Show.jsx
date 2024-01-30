const React = require("react");

const myStyle = {
  color: "#ffffff",
  backgroundColor: "#000000",
};

class Show extends React.Component {
  render() {
    const pokeItem = this.props.pokeItem;
    return (
      <div>
        <h1 style={myStyle}>Gotta Catch 'Em All: </h1>
        {/* {pokeItem.name} */}
        <h2 style={{ color: "green" }}>
          {pokeItem.name[0].toUpperCase() + pokeItem.name.slice(1)}
        </h2>
        <img src={pokeItem.img + ".jpg"} />
        <a href={"./"}>Back to Index</a>
      </div>
    );
  }
}

module.exports = Show;

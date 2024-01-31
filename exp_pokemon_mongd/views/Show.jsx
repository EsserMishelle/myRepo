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
          {/* <a href={`/pokemon/${pokeItem._id.toString()}`}> */}
          {pokeItem.name[0].toUpperCase() + pokeItem.name.slice(1)}
          <br />
          {/* </a> */}
        </h2>
        <img
          src={pokeItem.img + ".jpg"}
          alt={pokeItem.name}
          width={"350px"}
          height={"auto"}
        />
        {/* <a href={"/pokemon"}>Back to Index</a> */} {/* not work */}
        <a href={"./"}>Back to Index</a>
        {/* <a href={"/pokemon"}>Back to Index</a> */}
      </div>
    );
  }
}

module.exports = Show;

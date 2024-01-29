const React = require("react");

const myStyle = {
  color: "#ffffff",
  backgroundColor: "#000000",
};

class Index extends React.Component {
  render() {
    const { pokemon } = this.props;
    return (
      <div>
        <h1 style={myStyle}>See All The Pokemon!'</h1>
        {/* <h1>See All The Pokemon!'</h1> */}
        {/* <nav>
          <a href="/pokemon/new"> Add a new Pokemon</a>
        </nav> */}
        <ul>
          {pokemon.map((pokeItem, i) => {
            return (
              <li key={i}>
                <a href={`/pokemon/${i}`}>
                  {pokeItem.name[0].toUpperCase() + pokeItem.name.slice(1)}
                  {/* {pokeItem.name} */}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
module.exports = Index;

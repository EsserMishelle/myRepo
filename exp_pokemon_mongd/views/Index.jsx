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
        <h1 style={myStyle}>See All The Pokemon!</h1>
        <nav>
          <a href="/pokemon/new">Create a New Pokemon</a>
        </nav>

        <ul>
          {pokemon.map((pokeItem) => {
            return (
              <li key={pokeItem._id}>
                {/* <li key={i}> */}
                {/* <a href={`/pokemon/${i}`}>  --only for express--doesn't work with mongod */}
                <a href={`/pokemon/${pokeItem._id}`}>
                  {/* {pokeItem.name}  --original names all lowered-case*/}

                  {pokeItem.name[0].toUpperCase() + pokeItem.name.slice(1)}
                  <br />
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

const React = require("react");
const DefaultLayout = require("./layout/Default");

class Index extends React.Component {
  render() {
    const { logs } = this.props.logs;
    return (
      <DefaultLayout title={"logs Index Page"}>
        <h1>logs Index Page</h1>
        <nav>
          <a href="/logs/new">Create a New log</a>
        </nav>
        <ul>
          {logs.map((log, i) => {
            return (
              <li key={i}>
                The <a href={`/logs/${log._id}`}>{log.name}</a> is {log.entry}{" "}
                <br />
                {log.shipIsBroken
                  ? "It is ready to eat!"
                  : "It is not ready to eat!"}
                <br />
              </li>
            );
          })}
        </ul>
      </DefaultLayout>
    );
  }
}

module.exports = Index;

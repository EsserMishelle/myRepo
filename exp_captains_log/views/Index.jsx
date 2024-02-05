const React = require("react");
const DefaultLayout = require("./layout/Default");

class Index extends React.Component {
  render() {
    const { logs } = this.props;
    return (
      <DefaultLayout>
        {/* <nav className="nav"> */}
        <nav>
          <a href="/logs/new">
            <button>Create a New log</button>
          </a>
        </nav>
        <div>
          <ul>
            {logs.map((log, i) => (
              <li key={i}>
                <a href={`/logs/${log._id}`}>
                  <h2>
                    {log.title} : {log.entry} {"-"}
                    {log.shipIsBroken
                      ? "Send a distress call!"
                      : "We'll go on exploring the galaxy"}
                  </h2>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = Index;

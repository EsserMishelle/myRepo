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
          {logs.map((log, i) => (
            <article key={i}>
              <a href={`/logs/${log._id}`}>
                <h2>
                  {log.name} - {log.entry} -{" "}
                  {log.shipIsBroken ? "Ripe" : "Not Ripe Yuck Thats Nasty"}
                </h2>
              </a>
            </article>
          ))}
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = Index;

const React = require("react");
const DefaultLayout = require("./layout/Default");
class Show extends React.Component {
  render() {
    const log = this.props.log;
    return (
      <DefaultLayout>
        <div>
          <article>
            <h2>
              {log.name} -
              {log.shipIsBrokenS
                ? "Is Ready To Eat"
                : "Is not yet ready to be consumed"}
            </h2>
            <h3>{log.entry}</h3>
            <a href={`/logs/${log._id}/Edit`}>
              <button>Edit</button>
            </a>
            <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
              <input type="submit" value="Delete" />
            </form>
            <a href="/logs/">
              <button>Back to Main</button>
            </a>
          </article>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = Show;

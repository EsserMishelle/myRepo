const React = require("react");
const DefaultLayout = require("./layout/Default");
class Show extends React.Component {
  render() {
    const log = this.props.log;
    return (
      // <DefaultLayout>
      <div>
        <article>
          <h1>Log Entry Detail</h1>
          <h2 style={{ fontSize: "30px", fontWeight: "bolder", color: "blue" }}>
            {" "}
            {log.title}
          </h2>
          <h4 style={{ fontSize: "30px", fontWeight: "bolder", color: "blue" }}>
            {log.entry}
          </h4>
          {log.shipIsBroken
            ? "Send a distress call!"
            : "We'll go on exploring the galaxy"}
          {/* {log.timestamps} */}
        </article>
        <nav>
          {/* <a href={`/logs/${log._id}/Edit`}>
              <button>Edit</button>
            </a> */}
          <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
            <input type="submit" value="Delete" />
          </form>
          <a href="/logs/">
            <button>Back to Main</button>
          </a>
        </nav>
      </div>
      // </DefaultLayout>
    );
  }
}

module.exports = Show;

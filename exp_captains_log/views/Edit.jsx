const React = require("react");

const DefaultLayout = require("./layout/Default");

class Edit extends React.Component {
  render() {
    const { log } = this.props;
    return (
      <DefaultLayout>
        <form action={`/logs/${log._id}?_method=PUT`} method="POST">
          <fieldset>
            <legend>Edit a log</legend>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              name="title"
              placeholder="enter log name"
              defaultValue={log.title}
              style={{ width: "270px" }}
            />
            <br />
            <label htmlFor="entry"> Entry:</label>
            <input
              type="text"
              name="entry"
              placeholder="enter log name"
              defaultValue={log.entry}
              style={{
                width: "700px",
                height: "fit-content",
                justifyContent: "center",
              }}
            />

            <label htmlFor="shipIsBroken"> The ship is brokenT:</label>
            {log.shipIsBroken ? (
              <input type="checkbox" name="shipIsBroken" defaultChecked />
            ) : (
              <input type="checkbox" name="shipIsBroken" />
            )}
          </fieldset>
          <input type="submit" value={`Edit${log.title}`} />
        </form>
      </DefaultLayout>
    );
  }
}

module.exports = Edit;

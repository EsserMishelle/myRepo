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
            <label htmlFor="name">NAME:</label>
            <input
              type="text"
              name="name"
              placeholder="enter log name"
              defaultValue={log.name}
            />

            <label htmlFor="entry">COLOR:</label>
            <input
              type="text"
              name="entry"
              placeholder="enter log name"
              defaultValue={log.entry}
            />

            <label htmlFor="shipIsBroken"> READY TO EAT:</label>
            {log.shipIsBroken ? (
              <input type="checkbox" name="shipIsBroken" defaultChecked />
            ) : (
              <input type="checkbox" name="shipIsBroken" />
            )}
          </fieldset>
          <input type="submit" value={`Edit ${log.name}`} />
        </form>
      </DefaultLayout>
    );
  }
}

module.exports = Edit;

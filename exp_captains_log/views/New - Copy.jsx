const React = require("react");
const DefaultLayout = require("./layout/Default");

class New extends React.Component {
  render() {
    return (
      <DefaultLayout>
        <a href="/logs/New">
          <button>Create A New log</button>
        </a>
        <form action="/logs" method="post">
          <fieldset>
            <legend>Create a New log</legend>
            <label htmlFor="name">
              NAME:
              <input type="text" name="name" placeholder="enter log name" />
            </label>
            <label htmlFor="entry">
              COLOR:
              <input type="text" name="entry" placeholder="enter log name" />
            </label>
            <label htmlFor="shipIsBroken">
              {" "}
              READY TO EAT:
              <input type="checkbox" name="shipIsBroken" />{" "}
            </label>
          </fieldset>
          <input type="submit" value="create New log" />
        </form>
      </DefaultLayout>
    );
  }
}

module.exports = New;

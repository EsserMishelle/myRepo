const React = require("react");
const DefaultLayout = require("./layout/Default");

class New extends React.Component {
  render() {
    return (
      <DefaultLayout>
        <a href="/logs/New">
          <button>Create A New log</button>
        </a>

        <form action="/logs" method="POST">
          <fieldset>
            <legend>Create a New log</legend>

            <label htmlFor="title">
              NAME:
              <input type="text" name="title" placeholder="Enter Log Litle" />
            </label>

            <label htmlFor="entry">
              COLOR:
              <input type="text" name="entry" placeholder="New Entry" />
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

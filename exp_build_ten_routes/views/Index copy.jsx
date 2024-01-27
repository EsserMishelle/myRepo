const React = require("react");
const style = require("style.css");

class Index extends React.Component {
  render() {
    const { events } = this.props;
    return (
      <div>
        <h1>Fun local events</h1>
        <nav>
          <a href="/events/new">Create a New Event</a>
        </nav>
        <ul>
          {events.map((event, i) => {
            return (
              <div>
                <div
                  style={{
                    width: "400px",
                    height: "200px",
                    backgroundColor: "lightgray",
                    color: "blue",
                    padding: "20px",
                  }}
                >
                  <li key={i}>
                    {" "}
                    Event name:
                    <a href={`/events/${i}`}>
                      <h4> {event.title}</h4>
                    </a>{" "}
                    is
                    {event.description} {""}
                    <br></br>
                    {event.location === "online"
                      ? `It is an online event`
                      : `It is not online`}
                    <br />
                  </li>
                </div>
                <br />
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}
module.exports = Index;

const React = require("react");
const DefaultLayout = require("./layout/Default");

// Move formatDate function to the top
const formatDate = (dateString) => {
  const formattedDate = new Date(dateString).toISOString().slice(0, 16);
  return formattedDate;
};

class Show extends React.Component {
  convertToUserTimeZone = (utcDateString) => {
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const userTime = new Date(utcDateString);

    // Convert to user's time zone
    const userTimeOptions = {
      timeZone: userTimeZone,
      hour12: false, // Ensure 24-hour format
    };
    const userTimeString = userTime.toLocaleString("en-US", userTimeOptions);

    return userTimeString;
  };

  render() {
    const flight = this.props.flight || {};

    return (
      <DefaultLayout>
        <nav>
          <a href="/flights">
            <button>Back to Index</button>
          </a>
          <a href={`/flights/${flight._id}/edit`}>
            <button>Edit This Flight</button>
          </a>
        </nav>

        <div>
          Airline: {""}
          <span
            style={{
              fontSize: "30px",
              fontWeight: "bolder",
              entry: "blue",
            }}
          >
            {flight.airline}
          </span>
          <br />
          Flight Number:
          <span
            style={{
              fontSize: "20px",
              fontWeight: "bolder",
              entry: "red",
            }}
          >
            {flight.flightNo}
            <br />
          </span>
          Departure Airport:
          <span
            style={{
              fontSize: "20px",
              fontWeight: "bolder",
              entry: "red",
            }}
          >
            {flight.depart_airport}
            <br />
          </span>
          Departure:{" "}
          <span
            style={{
              fontSize: "18px",
              fontWeight: "bolder",
              entry: "green",
            }}
          >
            {flight.depart_dateTime &&
              this.convertToUserTimeZone(flight.depart_dateTime)}
            <br />
          </span>
          Arrival Airport:
          {flight.destinations && flight.destinations[0] && (
            <span
              style={{
                fontSize: "20px",
                fontWeight: "bolder",
                entry: "red",
              }}
            >
              {flight.destinations[0].arrive_airport}
              <br />
            </span>
          )}
          Arrival Date Time:{" "}
          {flight.destinations && flight.destinations[0] && (
            <span
              style={{
                fontSize: "18px",
                fontWeight: "bolder",
                entry: "green",
              }}
            >
              {flight.destinations[0].arrive_dateTime
                ? this.convertToUserTimeZone(
                    flight.destinations[0].arrive_dateTime
                  )
                : "N/A"}
              <br />
            </span>
          )}
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = Show;

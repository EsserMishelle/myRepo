const React = require("react");
const DefaultLayout = require("../layout/Default");

class Index extends React.Component {
  render() {
    const { fruits } = this.props;

    return (
      <DefaultLayout title={"Fruits Index Page"}>
        {/* <h1>Fruits Index Page</h1> */}
        <nav>
          <a href="/fruits/new">Create a New Fruit</a>
        </nav>
        <ul>
          {fruits.map((fruit, i) => (
            <li key={fruit._id}>
              The <a href={`/fruits/${fruit._id}`}>{fruit.name}</a> is{" "}
              {fruit.color} <br />
              {fruit.readyToEat
                ? "It is ready to eat!"
                : "It is not ready to eat!"}
              <form
                action={`/fruits/${fruit._id}?_method=DELETE`}
                method="POST"
              >
                <button type="submit" value="DELETE">
                  Delete
                </button>
              </form>
              <a href={`/fruits/${fruit._id}/edit`}> Edit This Fruit </a>
              <br />
            </li>
          ))}
        </ul>
      </DefaultLayout>
    );
  }
}

module.exports = Index;

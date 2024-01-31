const React = require("react");
const DefaultLayout = require("../layout/Default");

class Index extends React.Component {
  render() {
    const { vegetables } = this.props;
    return (
      <DefaultLayout title={"Vegetables Index Page"}>
        <nav>
          <a href="/vegetables/new">Create a New vegetable</a>
        </nav>
        <ul>
          {vegetables.map((vegetable, i) => {
            return (
              <li key={vegetable._id}>
                The{" "}
                <a href={`/vegetables/${vegetable._id}`}>{vegetable.name}</a> is{" "}
                {vegetable.color} <br />
                {vegetable.readyToEat
                  ? "It is ready to eat!"
                  : "It is not ready to eat!"}
                <form
                  action={`/vegetables/${vegetable._id}?_method=DELETE`}
                  method="POST"
                >
                  <button type="submit" value="DELETE">
                    Delete
                  </button>
                </form>
                <a href={`/vegetables/${vegetable._id}/edit`}>
                  {" "}
                  Edit This Vegetable{" "}
                </a>
                <br />
              </li>
            );
          })}
        </ul>
      </DefaultLayout>
    );
  }
}

module.exports = Index;

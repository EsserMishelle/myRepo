function AllStarships() {
  return fetch("https://swapi.dev/api/starships")
    .then((response) => response.json())
    .then(
      (data) => data.results
      // console.log(dataObj)
    );
}

export default AllStarships;

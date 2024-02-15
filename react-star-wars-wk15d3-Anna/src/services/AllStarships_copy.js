function AllStarships() {
  return fetch("https://swapi.dev/api/starships?offet=0&limit=5")
    .then((response) => response.json())
    .then(
      (data) => data.results
      // console.log(dataObj)
    );
}

export default AllStarships;

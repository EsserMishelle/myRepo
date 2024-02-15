function AllStarships() {
  return fetch("https://swapi.dev/api/starships")
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log(data);
      return data.results.slice(0, 4);
    });
}
// console.log(dataObj)

export default AllStarships;

export function getStarships() {
  return fetch("https://swapi.dev/api/starships")
    .then((data) => data.json())
    .then((response) => response.results);
}

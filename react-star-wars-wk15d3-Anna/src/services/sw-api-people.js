export function getPeople() {
  return fetch("https://swapi.dev/api/people").then((data) => data.json());
}

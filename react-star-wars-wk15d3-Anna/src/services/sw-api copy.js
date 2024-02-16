async function AllStarships(page) {
  try {
    const response = await fetch(
      `https://swapi.dev/api/starships/?page=${page}`
    );

    const data = await response.json();
    const nextPage = data.next;
    const previousPage = data.previous;

    return {
      starships: data.results || "No starships available",
      previousPage,
      nextPage,
    };
  } catch (error) {
    console.error("Error fetching starships:", error);
    throw new Error("Failed to fetch starships");
  }
}

export default AllStarships;

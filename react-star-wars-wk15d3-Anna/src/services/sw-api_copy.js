async function AllStarships(page) {
  try {
    const response = await fetch(
      `https://swapi.dev/api/starships/?page=${page}`
    );

    const data = await response.json();
    // console.log(data); ////making sure we get the meta data that has header, next, previous info
    const nextPage = data.next; ////next page number or url address
    const previousPage = data.previous; ////previous page number or url address
    console.log(data.results);
    console.log(nextPage);
    // console.log(
    //   `currentPage is + ${String(
    //     Math.abs(Number(nextPage.split("").slice(-1)) - 1)
    //   )}`
    // );
    console.log(previousPage);

    return {
      starships:
        data && data.results && data.results.length
          ? data.results
          : "No starships available",
      previousPage: previousPage,
      nextPage: nextPage,
    };
  } catch (error) {
    console.log(error);
    throw new error("haha, epic failing again?");
  }
}

export default AllStarships;

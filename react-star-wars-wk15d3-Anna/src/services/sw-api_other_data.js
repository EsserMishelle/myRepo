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
/////sw-api has it reset to 10 starships per page
/////we cannot change it by adding limits and offsets
////but we can use slice to get the limit to 5

//works to get only 5
// function AllStarships() {
//   return fetch("https://swapi.dev/api/starships")
//     .then((response) => response.json())
//     .then((data) => {
//       return data.results.slice(0, 5);
//     });
// }
// export default AllStarships;

////we need to do this to get the pagination
// function AllStarships() {
//   return fetch("https://swapi.dev/api/starships")
//     .then((response) => {
//       console.log(response);
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//       // const pageNum;
//       const next = data.next;
//       console.log(next);
//       const previous = data.previous;
//       console.log(previous);
//       return data.results.slice(0, 10);
//     });
// }

// export default AllStarships;

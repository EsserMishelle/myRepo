import React, { useState, useEffect } from "react";
import AllStarships from "../services/sw-api";
import { Link } from "react-router-dom";
import "../App.css";
import CardDetails from "./CardDetails";

function StarShipCard() {
  const [starships, setStarships] = useState([]);
  const [loading, setLoading] = useState(false);
  const [previousPage, setPreviousPage] = useState(null);
  const [nextPage, setNextPage] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const fetchStarshipsByPage = async (page) => {
    try {
      setLoading(true);
      const { starships, previousPage, nextPage } = await AllStarships(page);
      setStarships(starships);
      setPreviousPage(previousPage);
      setNextPage(nextPage);
      setCurrentPage(page);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching starships:", error);
      setLoading(false);
    }
  };

  const handleNextPage = (event) => {
    event.preventDefault();
    if (nextPage) {
      const nextPageNumber = getPageNumberFromUrl(nextPage);
      console.log(`nextPage is ${nextPage}`);
      // setCurrentPage(nextPage);

      fetchStarshipsByPage(nextPageNumber);
    }
  };

  const handlePreviousPage = (event) => {
    event.preventDefault();
    if (previousPage) {
      const previousPageNumber = getPageNumberFromUrl(previousPage);
      console.log(`previousPage is ${previousPage}`);
      fetchStarshipsByPage(previousPageNumber - 1);
    }
  };

  const getPageNumberFromUrl = (url) => {
    const pageNumber = url.match(/(\d+)$/)[0];
    return parseInt(pageNumber);
  };

  useEffect(() => {
    fetchStarshipsByPage(1);
  }, []);

  return (
    <div>
      <h1 className="app-title">Star Wars Starship Fleet</h1>
      <h3 className="app-subtitle">Click each card for details</h3>
      <br />

      {loading ? (
        <div>Loading....</div>
      ) : (
        <div className="card-container">
          {starships.map((starship) => {
            const { ...starshipData } = starship;
            return (
              <Link
                to={`/starships/${starshipData.name}`}
                key={starshipData.name}
                className="card-link"
              >
                <div className="summary-small-card">
                  <h2>{starshipData.name}</h2>
                </div>
              </Link>
            );
          })}
        </div>
      )}
      <div>
        {previousPage && (
          <Link
            to="#"
            className="page-link-pretend-btn"
            onClick={handlePreviousPage}
          >
            Previous
          </Link>
        )}
        <br />
        <br />
        {nextPage && (
          <Link
            to="#"
            className="page-link-pretend-btn"
            onClick={handleNextPage}
          >
            Next
          </Link>
        )}
      </div>
      <CardDetails currentPage={currentPage} />
    </div>
  );
}

export default StarShipCard;

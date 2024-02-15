import React, { useState, useEffect } from "react";
import AllStarships from "../services/sw-api";
import { Link } from "react-router-dom";
import "../App.css";

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

  const getNextPageNumber = () => {
    if (nextPage) {
      const pageNumber = nextPage.match(/(\d+)$/)[0];
      return parseInt(pageNumber);
    }
    return null;
  };

  const handleNextPage = (event) => {
    event.preventDefault(); // Prevent the default behavior of the link
    const nextPageNumber = getNextPageNumber();
    if (nextPageNumber) {
      fetchStarshipsByPage(nextPageNumber);
    }
  };

  const getPeviousPageNumber = () => {
    if (previousPage) {
      const pageNumber = previousPage.match(/(\d+)$/)[0];
      return parseInt(pageNumber);
    }
    return null;
  };

  const handlePreviousPage = (event) => {
    event.preventDefault(); // Prevent the default behavior of the link
    const previousPageNumber = getPeviousPageNumber();
    if (previousPageNumber) {
      fetchStarshipsByPage(previousPageNumber);
    }
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
            const { name } = starship;
            return (
              <Link to={`/starships/${name}`} key={name} className="card-link">
                <div className="summary-small-card">
                  <h2>{name}</h2>
                </div>
              </Link>
            );
          })}
        </div>
      )}
      <div>
        {previousPage && (
          <Link to="#" className="link" onClick={handlePreviousPage}>
            Previous
          </Link>
        )}
        <br />
        <br />
        {nextPage && (
          <Link to="#" className="link" onClick={handleNextPage}>
            Next
          </Link>
        )}
      </div>
    </div>
  );
}

export default StarShipCard;

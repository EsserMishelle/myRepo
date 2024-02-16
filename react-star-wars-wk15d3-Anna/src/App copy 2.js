import React from "react";
import { Routes, Route } from "react-router-dom";
import StarShipCard from "./components/StarShipCard";
import CardDetails from "./components/CardDetails";
import "./App.css";
function App() {
  return (
    <div className="main-app-body">
      <Routes>
        <Route path="/" element={<StarShipCard className="cards-list" />} />
        <Route path="/starships/:name" element={<CardDetails />} />
      </Routes>
    </div>
  );
}

export default App;

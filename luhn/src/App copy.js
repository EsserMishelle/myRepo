import Form from "./components/Form";
import Luhn from "./components/Luhn";
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h2>
        <Form />
        <Luhn />
      </h2>
    </div>
  );
}

export default App;

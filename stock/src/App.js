import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Stocks from "./pages/Stocks";
import StocksApi from "./pages/StocksApi";
import Nav from "./components/Nav";
// import data from './data.json'

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/stocks" element={<Dashboard />} />
        <Route path="/stocks/sample/:symbol" element={<Stocks />} />
        <Route path="/stocks/real-time/:symbol" element={<StocksApi />} />
      </Routes>
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <Nav />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/stocks" element={<Dashboard />} />
//         <Route path="/stocks/:symbol" element={<Stocks />} />
//         <Route path="/stocks/:symbol" element={<StocksApi />} />
//       </Routes>
//     </div>
//   );
// }
export default App;

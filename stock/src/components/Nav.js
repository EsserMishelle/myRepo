import { Link } from "react-router-dom";

export default function Nav(props) {
  return (
    <div className="nav-bar">
      <div className="nav-container">
        <div className="nav-items">
          <Link to="/">
            <div className="nav-logo">iStock</div>
          </Link>
        </div>

        <div className="nav-items">
          <Link to="stocks/sample/:symbol" className="nav-link"></Link>
        </div>

        <div className="nav-items">
          <Link to="/stocks" className="nav-link">
            <div>Stocks </div>
          </Link>
        </div>

        <div className="nav-items">
          <Link to="/about" className="nav-link">
            <div>About</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

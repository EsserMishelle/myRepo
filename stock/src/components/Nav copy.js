import { Link } from "react-router-dom";

export default function Nav(props) {
  return (
    <div className="nav-bar">
      <div className="nav-container">
        <div className="nav-items">
          {/* <span className="nav-logo"> */}
          <div className="nav-logo">
            <Link to="/">
              <div>iStock</div>
            </Link>
          </div>
        </div>

        <div className="nav-items">
          <Link to="stocks/sample/:symbol"></Link>
        </div>

        <div className="nav-items">
          <Link to="/stocks">
            <div>Stocks </div>
          </Link>
        </div>

        <div className="nav-items">
          <Link to="/about">
            <div>About</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

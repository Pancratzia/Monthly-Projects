import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Header = ({ page }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="left">
          <h1 className="title">
            <Link to="/">Quiz App</Link>
          </h1>
          <h2 className="subtitle">
            Test your knowledge about programming with this awesome quiz!
          </h2>
        </div>

        <div className="right">
          <nav className="nav">
            <Link to="/" className={page === "home" ? "active link" : "link"}>
              Home
            </Link>
            <Link
              to="/ranking"
              className={page === "ranking" ? "active link" : "link"}
            >
              Ranking
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

Header.propTypes = {
  page: PropTypes.string,
};

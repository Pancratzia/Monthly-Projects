import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Header = ({page}) => {
  return (
    <header className="header">
      <h1>Quiz App</h1>
      <h2>Test your knowledge about programming with this awesome quiz!</h2>

      <nav className="nav">
        <Link to="/" className={page === "home" ? "active" : ""}>Home</Link>
        <Link to="/rank" className={page === "rank" ? "active" : ""}>Ranking</Link>
      </nav>
    </header>
  );
};

export default Header;

Header.propTypes = {
  page: PropTypes.string
}

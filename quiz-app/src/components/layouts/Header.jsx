import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const Header = ({ page }) => {

  const { t } = useTranslation("global" );
  return (
    <header className="header">
      <div className="container">
        <div className="left">
          <h1 className="main-title title">
            <Link to="/">{t("title")}</Link>
          </h1>
          <h2 className="subtitle">
            {t("header.subtitle")}
          </h2>
        </div>

        <div className="right">
          <nav className="nav">
            <Link to="/" className={page === "home" ? "active link" : "link"}>
              {t("nav.home")}
            </Link>
            <Link
              to="/ranking"
              className={page === "ranking" ? "active link" : "link"}
            >
              {t("nav.ranking")}
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

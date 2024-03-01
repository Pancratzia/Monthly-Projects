import PropTypes from "prop-types";

export const Info = ({ copy = false }) => {
  return (
    <div className="info">
      <p className="by">
        By:{" "}
        <a
          className="link"
          target="_blank"
          href="https://github.com/Pancratzia"
        >
          Pancratzia
        </a>
      </p>
      <small className="powered">
        Powered by{" "}
        <a className="link" target="_blank" href="https://swapi.dev/">
          The Star Wars API
        </a>
      </small>

      {copy && (
        <small className="copyright">&copy; 2024 - All rights reserved</small>
      )}
    </div>
  );
};

Info.propTypes = {
  copy: PropTypes.bool,
};

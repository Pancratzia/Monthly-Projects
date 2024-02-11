import PropTypes from "prop-types";

const Turns = ({ turn }) => {
  return (
    <div className="turns">
      <div
        className={`turns__player turns__player-1 ${
          turn === "1" ? "active" : ""
        }`}
      ></div>
      <div
        className={`turns__player turns__player-2 ${
          turn === "2" ? "active" : ""
        }`}
      ></div>
    </div>
  );
};

export default Turns;

Turns.propTypes = {
  turn: PropTypes.string.isRequired,
}

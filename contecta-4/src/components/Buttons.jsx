import PropTypes from "prop-types";

const Buttons = ({handleReset, handleResetPoints}) => {
  return (
    <div className="buttons">
        <button className="btn btn--reset" onClick={handleReset}>
          Reset
        </button>
        <button className="btn btn--resetPoints" onClick={handleResetPoints}>
          Reset Points
        </button>
      </div>
  )
}

export default Buttons;

Buttons.propTypes = {
  handleReset: PropTypes.func.isRequired,
  handleResetPoints: PropTypes.func.isRequired
}
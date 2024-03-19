import PropTypes from 'prop-types';

const Timer = ( { timer, timerPercentage }) => {
  return (
    <div className="timer-container">
      <h3
        className="timer"
        style={{
          background: `conic-gradient(transparent ${
            100 - timerPercentage
          }%, var(--amarillo) ${100 - timerPercentage}%)`,
        }}
      >
        <span>{timer}</span>
      </h3>
    </div>
  );
};

export default Timer;

Timer.propTypes = {
  timer: PropTypes.number.isRequired,
  timerPercentage: PropTypes.number.isRequired
}

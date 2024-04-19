import PropTypes from "prop-types";

const Clock = ({ progress, time, activity  }) => {

  return (
    <div className="flex flex-col justify-center items-center  rounded-full w-44 h-44 drop-shadow-2xl conic-gradient-progress" style={{ "--progress": `${progress}%` }}>
      <div className="flex flex-col justify-center items-center rounded-full w-40 h-40 bg-purple-200">
        <h3 className="text-3xl font-bold text-purple-950">{time}</h3>
        <h4 className="text-sm text-purple-950">{activity}</h4>
      </div>
    </div>
  );
};

export default Clock;

Clock.propTypes = {
  progress: PropTypes.number.isRequired,
  time: PropTypes.string.isRequired,
  activity: PropTypes.string.isRequired
}

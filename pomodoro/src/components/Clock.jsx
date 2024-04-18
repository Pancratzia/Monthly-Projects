import PropTypes from "prop-types";

const Clock = ({ progress = "0" }) => {

    
  return (
    <div className="flex flex-col justify-center items-center  rounded-full w-44 h-44 drop-shadow-2xl conic-gradient-progress" style={{ "--progress": `${progress}%` }}>
      <div className="flex flex-col justify-center items-center rounded-full w-40 h-40 bg-purple-200">
        <h3 className="text-3xl font-bold text-purple-950">25:00</h3>
      </div>
    </div>
  );
};

export default Clock;

Clock.propTypes = {
  progress: PropTypes.number,
}

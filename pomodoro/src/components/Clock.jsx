import PropTypes from "prop-types";
import { CircularProgressBar } from "react-percentage-bar";
import "react-percentage-bar/dist/index.css";

const Clock = ({ percentage = 0, activity = "Trabajando", time = "25:00" }) => {
  return (
    <div className="w-48 h-48">
      <CircularProgressBar
        radius={"6.5rem"}
        roundLineCap={false}
        percentage={percentage}
        showPercentage={false}
        color="#3b0764"
        shadow="true"
      >
        <div className="w-full h-full flex justify-center items-center flex-col">
          <p className="text-3xl text-purple-950">{time}</p>
          <p className="text-sm text-purple-950">{activity}</p>
        </div>
      </CircularProgressBar>
    </div>
  );
};

export default Clock;

Clock.propTypes = {
  percentage: PropTypes.number,
  activity: PropTypes.string,
  time: PropTypes.string,
};

import PropTypes from "prop-types";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Clicles from "./Cicles";

const Clock = ({
  percentage = 0,
  activity = "Trabajando",
  time = "25:00",
  cicles,
  currentCicle,
}) => {
  return (
    <div className="w-48 h-48 rounded-full border border-purple-950 shadow-md shadow-purple-950">
      <CircularProgressbarWithChildren
        value={percentage}
        styles={buildStyles({
          textColor: "rgb(59 7 100)",
          pathColor: "rgb(59 7 100)",
          trailColor: "transparent",
        })}
      >
        <div className="w-full h-full flex justify-center items-center flex-col gap-2">
        <Clicles actualCycle={currentCicle} totalCycles={cicles} />

          <p className="text-3xl text-purple-950">{time}</p>
          <p className="text-sm text-purple-950">{activity}</p>
        </div>
      </CircularProgressbarWithChildren>
    </div>
  );
};

export default Clock;

Clock.propTypes = {
  percentage: PropTypes.number,
  activity: PropTypes.string,
  time: PropTypes.string,
  cicles: PropTypes.number.isRequired,
  currentCicle: PropTypes.number.isRequired
};
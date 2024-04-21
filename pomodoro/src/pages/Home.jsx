import Clock from "../components/Clock";
import InteriorLayout from "../components/layouts/InteriorLayout";
import Button from "../components/utils/Button";
import { usePomodoro } from "../hooks/usePomodoro";
import { FaCircleStop, FaCirclePlay, FaCirclePause } from "react-icons/fa6";


const Home = () => {
  const [time, activity, percentage, toogleTime, isTimerRunning, resetTimer] = usePomodoro();

  return (
    <InteriorLayout>
      <Clock percentage={percentage} time={time} activity={activity} />

      <div className="flex gap-5 h-16">
        <Button classNameProp="w-16 h-16" onClick={toogleTime} icon={ isTimerRunning ? <FaCirclePause className="w-8 h-8" /> : <FaCirclePlay className="w-8 h-8" />}>
          {isTimerRunning ? "Pausar" : "Iniciar"}
        </Button>

        <Button icon={<FaCircleStop className="w-8 h-8" />} onClick={resetTimer}>
          {"Detener"}
        </Button>
      </div>
    </InteriorLayout>
  );
};

export default Home;

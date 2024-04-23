import Clock from "../components/Clock";
import InteriorLayout from "../components/layouts/InteriorLayout";
import Button from "../components/utils/Button";
import Input from "../components/utils/Input";
import Label from "../components/utils/Label";
import { usePomodoro } from "../hooks/usePomodoro";
import {
  FaCircleStop,
  FaCirclePlay,
  FaCirclePause,
  FaCircleCheck,
} from "react-icons/fa6";

const Home = () => {
  const [
    time,
    activity,
    percentage,
    toogleTime,
    isTimerRunning,
    resetTimer,
    activityHasAName,
    activityName,
    submitActivity,
  ] = usePomodoro();

  return (
    <InteriorLayout>
      {!activityHasAName ? (
        <div className="container flex gap-2">
          <Input
            placeholder="Actividad"
            name="activity"
            required={true}
            id="activity"
          />
          <Button
            icon={<FaCircleCheck className="w-8 h-8" />}
            onClick={submitActivity}
          >
            {"Iniciar Actividad"}
          </Button>
        </div>
      ) : (
        <>
          <Label text={activityName} />

          <Clock percentage={percentage} time={time} activity={activity} />

          <div className="flex gap-5 h-16">
            <Button
              onClick={toogleTime}
              icon={
                isTimerRunning ? (
                  <FaCirclePause className="w-8 h-8" />
                ) : (
                  <FaCirclePlay className="w-8 h-8" />
                )
              }
            >
              {isTimerRunning ? "Pausar" : "Iniciar"}
            </Button>

            <Button
              icon={<FaCircleStop className="w-8 h-8" />}
              onClick={resetTimer}
            >
              {"Detener"}
            </Button>
          </div>
          {!isTimerRunning && (
            <div className="opacity-50 text-sm container">
            <Label text={"Presiona el botón para hacer avanzar el tiempo"} />
          </div>
          )}
          
        </>
      )}
    </InteriorLayout>
  );
};

export default Home;

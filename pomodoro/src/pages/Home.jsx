import Clock from "../components/Clock";
import InteriorLayout from "../components/layouts/InteriorLayout";
import Button from "../components/utils/Button";
import Input from "../components/utils/Input";
import Label from "../components/utils/Label";
import PropTypes from "prop-types";
import {
  FaCircleStop,
  FaCirclePlay,
  FaCirclePause,
  FaCircleCheck,
} from "react-icons/fa6";

const Home = ({
  time,
  activity,
  percentage,
  toogleTime,
  isTimerRunning,
  resetTimer,
  activityHasAName,
  activityName,
  submitActivity,
  errors,
  currentCicle,
  cicles,
  timeDivision,
}) => {

  return (
    <InteriorLayout>
      {!activityHasAName ? (
        <>
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

          {errors.length > 0 ? (
            <div className="text-purple-950 text-[10px] text-left container mt-[-16px] ml-4">
              <Label text={errors[0].errors[0]} />
            </div>
          ) : null}

          <div className="flex flex-col gap-1 text-xs opacity-50 text-left">
            <Label text={`Ciclos a realizar: ${cicles}`} />
            <Label
              text={`Tiempo de Trabajo: ${timeDivision[0].time} minutos`}
            />
            <Label
              text={`Tiempo de Descanso: ${timeDivision[1].time} minutos`}
            />
          </div>
        </>
      ) : (
        <>
          <Label text={activityName} />

          <Clock
            percentage={percentage}
            time={time}
            activity={activity}
            cicles={cicles}
            currentCicle={currentCicle}
          />

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
          
            <div className="opacity-50 text-sm container">
              <Label text={isTimerRunning ? "El tiempo está corriendo. Recuerda que si sales de la actividad, la misma será cancelada" : "Presiona el botón para hacer avanzar el tiempo y continuar con tu ciclo de trabajo definido"} />
            </div>
          
        </>
      )}
    </InteriorLayout>
  );
};

export default Home;

Home.propTypes = {
  time: PropTypes.string.isRequired,
  activity: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  toogleTime: PropTypes.func.isRequired,
  isTimerRunning: PropTypes.bool.isRequired,
  resetTimer: PropTypes.func.isRequired,
  activityHasAName: PropTypes.bool.isRequired,
  activityName: PropTypes.string.isRequired,
  submitActivity: PropTypes.func.isRequired,
  errors: PropTypes.array.isRequired,
  currentCicle: PropTypes.number.isRequired,
  cicles: PropTypes.number.isRequired,
  timeDivision: PropTypes.array.isRequired,
}

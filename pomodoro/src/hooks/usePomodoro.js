import { useEffect, useState } from "react";

const SECONDS = 60;
const INITIAL_TIME_DIVISION = [
  { name: "Trabajando", time: 25 },
  { name: "Descansando", time: 5 },
];
const INITIAL_ERRORS = [];

export const usePomodoro = () => {
  const [timeDivision, setTimeDivision] = useState(INITIAL_TIME_DIVISION);
  const [stateIndex, setStateIndex] = useState(0);
  const [activity, setActivity] = useState(
    INITIAL_TIME_DIVISION[stateIndex].name
  );
  const [timeInSeconds, setTimeInSeconds] = useState(
    INITIAL_TIME_DIVISION[stateIndex].time * SECONDS
  );
  const [time, setTime] = useState(formatTimer(timeInSeconds));
  const [percentage, setPercentage] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const [activityHasAName, setActivityHasAName] = useState(false);
  const [activityName, setActivityName] = useState("");
  const [cicles, setCicles] = useState(4);
  const [currentCicle, setCurrentCicle] = useState(1);
  const [errors, setErrors] = useState(INITIAL_ERRORS);

  {
    /** Functions **/
  }

  function formatTimer(timeInSeconds) {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;

    const secToStr = (sec) => String(sec).padStart(2, "0");
    const minutesToStr = (min) => String(min).padStart(2, "0");

    return `${minutesToStr(minutes)}:${secToStr(seconds)}`;
  }

  function calculatePercentage() {
    const totalTime = timeDivision[stateIndex].time * SECONDS;
    const timeLeft = totalTime - timeInSeconds;
    const percentage = (timeLeft / totalTime) * 100;

    setPercentage(Math.floor(percentage.toFixed(2)));
  }

  function toogleTime() {
    setIsTimerRunning(!isTimerRunning);
  }

  function resetTimer() {
    setIsTimerRunning(false);
    setPercentage(0);
    const newIndex = 0;
    setStateIndex(newIndex);
    setTimeInSeconds(timeDivision[newIndex].time * SECONDS);
    setActivity(timeDivision[newIndex].name);
    setTime(formatTimer(timeDivision[newIndex].time * SECONDS));
    setActivityName("");
    setActivityHasAName(false);
    setErrors(INITIAL_ERRORS);
    setCurrentCicle(1);
  }

  function submitActivity() {
    setErrors(INITIAL_ERRORS);
    const getActivityName = document.getElementById("activity").value;
    
    if (getActivityName === "") {
      setErrors((prevErrors) => [
        ...prevErrors,
        { name: "Activity", errors: ["El campo no puede estar vacío"] },
      ])

      return;
    }

    resetTimer();
    setActivityHasAName(true);
    setActivityName(getActivityName);
  }

  function handleSaveConfig() {
    const workingTime = document.getElementById("working_time").value;
    const breakTime = document.getElementById("break_time").value;
    const cycles = document.getElementById("cycles").value;

    if (workingTime === "" || breakTime === "" || cycles === "") {
      setErrors((prevErrors) => [
        ...prevErrors,
        { name: "Configuration", errors: ["Todos los campos son obligatorios"] },
      ])
    }

    setErrors(INITIAL_ERRORS);

    setTimeDivision([
      { name: "Trabajando", time: workingTime },
      { name: "Descansando", time: breakTime },
    ])

    setCicles(cycles);

    alert("Configuración guardada");
  }

  {
    /** Effects **/
  }

  useEffect(() => {
    if (isTimerRunning === true) {
      if (currentCicle > cicles) {
        resetTimer();
        return;
      }

      if (
        time === formatTimer(timeDivision[stateIndex].time * SECONDS) &&
        percentage === 0
      ) {
        setActivity(timeDivision[stateIndex].name);
      }

      const interval = setInterval(() => {
        if (timeInSeconds >= 0) {
          setTimeInSeconds(timeInSeconds - 1);
          setTime(formatTimer(timeInSeconds));
          calculatePercentage();
        }
      }, 1000);

      if (timeInSeconds < 0) {
        if (currentCicle <= cicles) {
          const newIndex = stateIndex === 0 ? 1 : 0;
          setStateIndex(newIndex);
          setTimeInSeconds(timeDivision[newIndex].time * SECONDS);
          calculatePercentage();

          if (stateIndex === 1) {
            const newCicle = currentCicle + 1;
            setCurrentCicle(newCicle);
          }
        }
      }

      return () => clearInterval(interval);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time, timeInSeconds, stateIndex, isTimerRunning]);

  return [
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
    handleSaveConfig,
  ];
};

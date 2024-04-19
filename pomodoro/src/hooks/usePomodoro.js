import { useEffect, useState } from "react";

export const usePomodoro = () => {
  const SECONDS = 60;
  const MINUTES = 25;


  const [timer, setTimer] = useState(SECONDS * MINUTES);
  const [progress, setProgress] = useState(100);
  const [time, setTime] = useState(formatTimer());

  function formatTimer(){
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;

    const secToStr = (sec) => String(sec).padStart(2, "0");
    const minutesToStr = (min) => String(min).padStart(2, "0");

    return `${minutesToStr(minutes)}:${secToStr(seconds)}`;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer >= 0) {
        setTimer(timer - 1);
        setProgress(((timer) / (SECONDS * MINUTES)) * 100);
        setTime(formatTimer());
      }
    }, 1000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timer]);

  return [progress, time];
};

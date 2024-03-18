import { useQuiz } from "../../hooks/useQuiz";

const Timer = () => {
  const { timer, timerPercentage } = useQuiz();
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

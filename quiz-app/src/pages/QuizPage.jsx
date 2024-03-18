
import "../assets/styles/quizPage.css";
import { useQuiz } from "../hooks/useQuiz";

const QuizPage = () => {

  const { name, selectedQuestions, actualQuestion, score, timer, timerPercentage, handleSelectedAnswer } = useQuiz();
  

  return (
    <div className="quiz container">
      <h2 className="subtitle">Hi {name}! Answer as fast as you can!</h2>
      <h3 className="score">
        Actual Score: <span>{score}</span>
      </h3>

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
      {actualQuestion < selectedQuestions.length && (
        <div className="question">
          <h2 className="question-text">{actualQuestion + 1} - {selectedQuestions[actualQuestion].pregunta}</h2>
          <ul className="options">
            {selectedQuestions[actualQuestion].respuestas.map(
              (option, index) => (
                <li key={index}>
                  <button onClick={() => handleSelectedAnswer(option.correcta)}>
                    {option.texto}
                  </button>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default QuizPage;

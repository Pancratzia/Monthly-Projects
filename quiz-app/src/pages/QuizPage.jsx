/* eslint-disable react/no-unescaped-entities */
import "../assets/styles/quizPage.css";
import { useQuiz } from "../hooks/useQuiz";
import Timer from "../components/quiz/Timer";

const QuizPage = () => {
  const {
    name,
    selectedQuestions,
    actualQuestion,
    score,
    handleSelectedAnswer,
  } = useQuiz();

  return (
    <div className="quiz container">
      {(selectedQuestions.length>0 && actualQuestion >= selectedQuestions.length) && (
        <>
          <h3 className="score">Your final score is: {score}</h3>
          <h5 className="subtitle">You're being redirected to the ranking page. Please wait...</h5>
        </>
      )}

      {actualQuestion < selectedQuestions.length && (
        <>
          <h2 className="subtitle">Hi {name}! Answer as fast as you can!</h2>
          <h3 className="score">
            Actual Score: <span>{score}</span>
          </h3>
          <Timer />
          <div className="question">
            <h2 className="question-text">
              {actualQuestion + 1} -{" "}
              {selectedQuestions[actualQuestion].pregunta}
            </h2>
            <ul className="options">
              {selectedQuestions[actualQuestion].respuestas.map(
                (option, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleSelectedAnswer(option.correcta)}
                    >
                      {option.texto}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default QuizPage;

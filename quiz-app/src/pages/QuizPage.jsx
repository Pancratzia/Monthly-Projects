/* eslint-disable react/no-unescaped-entities */
import "../assets/styles/quizPage.css";
import { useQuiz } from "../hooks/useQuiz";
import Timer from "../components/quiz/Timer";
import Questions from "../components/quiz/Questions";

const QuizPage = () => {
  const {
    name,
    selectedQuestions,
    actualQuestion,
    score,
    handleSelectedAnswer,
    timer,
    timerPercentage,
  } = useQuiz();

  return (
    <>
      {name && name.trim() !== "" && (
        <div className="quiz container">
          {selectedQuestions.length > 0 &&
            actualQuestion >= selectedQuestions.length && (
              <>
                <h3 className="score">Your final score is: {score}</h3>
                <h5 className="subtitle">
                  You're being redirected to the ranking page. Please wait...
                </h5>
              </>
            )}

          {actualQuestion < selectedQuestions.length && (
            <>
              <h2 className="subtitle">
                Hi {name}! Answer as fast as you can!
              </h2>
              <h3 className="score">
                Actual Score: <span>{score}</span>
              </h3>
              <Timer timer={timer} timerPercentage={timerPercentage} />
              <Questions
                selectedQuestions={selectedQuestions}
                actualQuestion={actualQuestion}
                handleSelectedAnswer={handleSelectedAnswer}
              />
            </>
          )}
        </div>
      )}
    </>
  );
};

export default QuizPage;

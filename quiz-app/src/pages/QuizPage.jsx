/* eslint-disable react/no-unescaped-entities */
import "../assets/styles/quizPage.css";
import { useQuiz } from "../hooks/useQuiz";
import Timer from "../components/quiz/Timer";
import Questions from "../components/quiz/Questions";
import { useTranslation } from "react-i18next";

const QuizPage = () => {
  const {
    name,
    selectedQuestions,
    actualQuestion,
    score
  } = useQuiz();

  const { t } = useTranslation("global");

  return (
    <>
      {name && name.trim() !== "" && (
        <div className="quiz container">
          {selectedQuestions.length > 0 &&
            actualQuestion >= selectedQuestions.length && (
              <>
                <h3 className="score">{t("QuizPage.score.finalScore")} {score}</h3>
                <h5 className="subtitle">
                  {t("QuizPage.score.subtitle")}
                </h5>
              </>
            )}

          {actualQuestion < selectedQuestions.length && (
            <>
              <h2 className="subtitle">
                {t("QuizPage.title.greeting")} {name}!... {t("QuizPage.title.text")}
              </h2>
              <h3 className="score">
                {t("QuizPage.score.actualScore")} <span>{score}</span>
              </h3>
              <Timer />
              <Questions />
            </>
          )}
        </div>
      )}
    </>
  );
};

export default QuizPage;

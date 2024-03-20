import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getQuestionsFromFirestore, saveFinalScore } from "../services/quizService.js";
import { useDispatch, useSelector } from "react-redux";
import { CHANGE_QUESTION, RESET_QUIZ_TO_DEFAULT, SET_QUESTIONS, SET_SCORE, SUBSTRACT_ONE_SECOND } from "../store/slices/quiz/quizSlice.js";
import { useTranslation } from "react-i18next";

export const useQuiz = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const name = sessionStorage.getItem("name");

  if (!name || name.trim() === "") {
    navigate("/");
  }

  const dispatch = useDispatch();
  const { selectedQuestions, actualQuestion, score, timer, timerPercentage } = useSelector((state) => state.quiz);


  const getQuestions = async () => {
    try {

      const q = await getQuestionsFromFirestore();
      const questions = getNRandomQuestions(q, 10);

      dispatch({ type: SET_QUESTIONS.type, payload: questions });
      
    } catch (error) {
      console.error(t("errors.errorGettingQuestions"), error);
    }
  };

  const getNRandomQuestions = (questions, n) => {
    const shuffled = questions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
  };

  const handleSelectedAnswer = (correcta) => {
    if (correcta) {
      const newScore = score + timer;
      dispatch({ type: SET_SCORE.type, payload: newScore });
    }

    dispatch({ type: CHANGE_QUESTION.type });
 
  };

  const handleFinishTest = async () => {

    await saveFinalScore(name, score);
    dispatch({ type: RESET_QUIZ_TO_DEFAULT.type });

    navigate("/ranking");
  };

  useEffect(() => {
    getQuestions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        dispatch({ type: SUBSTRACT_ONE_SECOND.type });
      } else {
        dispatch({ type: CHANGE_QUESTION.type });
      }
    }, 1000);

    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [actualQuestion, timer]);

  useEffect(() => {
    if ((actualQuestion === selectedQuestions.length) && selectedQuestions.length > 0) {
      handleFinishTest();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [actualQuestion]);

  return {
    name,
    selectedQuestions,
    actualQuestion,
    score,
    timer,
    timerPercentage,
    handleSelectedAnswer,
    handleFinishTest,
    getQuestions,
  };
};

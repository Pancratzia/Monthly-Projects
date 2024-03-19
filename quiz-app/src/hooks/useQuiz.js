import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getQuestionsFromFirestore, saveFinalScore } from "../services/quizService.js";

export const useQuiz = () => {
  const navigate = useNavigate();
  const name = sessionStorage.getItem("name");

  if (!name || name.trim() === "") {
    navigate("/");
  }
  
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [actualQuestion, setActualQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(30);
  const [timerPercentage, setTimerPercentage] = useState(100);

  const getQuestions = async () => {
    try {

      const q = await getQuestionsFromFirestore();

      setSelectedQuestions(getNRandomQuestions(q, 10));
      setActualQuestion(0);
    } catch (error) {
      console.error("Error getting questions: ", error);
    }
  };

  const getNRandomQuestions = (questions, n) => {
    const shuffled = questions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
  };

  const handleSelectedAnswer = (correcta) => {
    if (correcta) {
      setScore(score + timer);
    }

    setActualQuestion(actualQuestion + 1);
    setTimerPercentage(100);
    setTimer(30);
  };

  const handleFinishTest = async () => {

    await saveFinalScore(name, score);

    navigate("/ranking");
  };

  useEffect(() => {
    getQuestions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
        setTimerPercentage(((timer - 1) / 30) * 100);
      } else {
        setActualQuestion(actualQuestion + 1);
        setTimerPercentage(100);
        setTimer(30);
      }
    }, 1000);

    return () => clearInterval(interval);
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

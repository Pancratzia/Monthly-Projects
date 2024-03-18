import { useEffect, useState } from "react";
import { database } from "../firebase.js";

export const useQuiz = () => {
  const name = sessionStorage.getItem("name");

  if (!name) {
    window.location.href = "/";
  }

  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [actualQuestion, setActualQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(30);
  const [timerPercentage, setTimerPercentage] = useState(100);

  const getQuestions = async () => {
    try {
      const questionsRef = database.collection("questions");
      const querySnapshot = await questionsRef.get();

      const q = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const question = {
          id: doc.id,
          pregunta: data.pregunta,
          respuestas: data.respuestas,
        };
        q.push(question);
      });

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

    if (actualQuestion + 1 === selectedQuestions.length) {
      handleFinishTest();
    }

    setActualQuestion(actualQuestion + 1);
    setTimer(30);
  };

  const handleFinishTest = async () => {
    alert("Your score is: " + score + " and will be saved in the ranking");

    const queryRef = database.collection("rank");

    const querySnapshot = await queryRef.where("nombre", "==", name).get();

    if (querySnapshot.empty === true) {
      await queryRef.add({
        nombre: name,
        puntaje: score,
      });
    } else {
      await queryRef.doc(querySnapshot.docs[0].id).set(
        {
          puntaje: score,
        },
        { merge: true }
      );
    }

    window.location.href = "/ranking";
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

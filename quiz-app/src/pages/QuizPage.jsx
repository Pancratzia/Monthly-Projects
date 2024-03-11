import { useEffect, useState } from "react";
import { database } from "../firebase.js";

const QuizPage = () => {
  const name = sessionStorage.getItem("name");

  if (!name) {
    window.location.href = "/";
  }

  const [selectedQuestions, setSelectedQuestions] = useState([]);

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
    } catch (error) {
      console.error("Error getting questions: ", error);
    }
  };

  const getNRandomQuestions = (questions, n) => {
    const shuffled = questions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
  };

  useEffect(() => {
    getQuestions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(selectedQuestions);

  return <div>QuizPage</div>;
};

export default QuizPage;


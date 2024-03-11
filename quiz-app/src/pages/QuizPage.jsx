import { useEffect, useState } from "react";
import { database } from "../firebase.js";

const QuizPage = () => {
  const name = sessionStorage.getItem("name");

  if (!name) {
    window.location.href = "/";
  }

  const [questions, setQuestions] = useState([]);
  const [selectedQuestions, setSelectedQuestions] = useState([]);

  const getQuestions = () => {
    const questionsRef = database.collection("questions");

    questionsRef
      .get()
      .then((querySnapshot) => {
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
        setQuestions(q);
      })
      .catch((error) => {
        console.error("Error getting questions: ", error);
      });
  };

  const getNRandomQuestions = (n) => {
    const shuffled = questions.sort(() => 0.5 - Math.random());

    return shuffled.slice(0, n);
  };

  useEffect(() => {
    getQuestions();
    const randomQuestions = getNRandomQuestions(10);
    setSelectedQuestions(randomQuestions);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(selectedQuestions);

  return <div>QuizPage</div>;
};

export default QuizPage;

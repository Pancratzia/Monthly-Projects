import { useEffect, useState } from "react";
import { database } from "../firebase.js";

const QuizPage = () => {
  const name = sessionStorage.getItem("name");

  if (!name) {
    window.location.href = "/";
  }

  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [actualQuestion, setActualQuestion] = useState(0);
  const [score, setScore] = useState(0);

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
      setScore(score + 1);
    }

    setActualQuestion(actualQuestion + 1);
  }

  useEffect(() => {
    getQuestions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="quiz">
      <h1>Answer As Fast As You Can!</h1>
      <h3>Actual Score: {score}</h3>

      {actualQuestion < selectedQuestions.length && (
        <div>
          <h2>{selectedQuestions[actualQuestion].pregunta}</h2>

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

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
  const [timer, setTimer] = useState(30);

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

  const handleFinishTest = async() => {
    alert("Your score is: " + score + " and will be saved in the ranking");


    const queryRef = database.collection("rank");
    await queryRef.add({ nombre: name, puntaje: score });


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
      } else {
        setActualQuestion(actualQuestion + 1);
        setTimer(30);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [actualQuestion, timer]);

  return (
    <div className="quiz">
      <h1>Answer As Fast As You Can!</h1>
      <h3>Actual Score: {score}</h3>

      {actualQuestion < selectedQuestions.length && (
        <div>
          <h2>{selectedQuestions[actualQuestion].pregunta}</h2>
          <h4>Question #{actualQuestion + 1}</h4>

          <div>
            <h3 className="timer">{timer} seconds left</h3>
          </div>

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

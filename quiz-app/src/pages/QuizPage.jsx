import { database } from "../firebase.js"

const QuizPage = () => {

    const name = sessionStorage.getItem("name");

    if (!name) {
      window.location.href = "/";
    }

    //Obtener las preguntas de la base de datos que están dentro de la coleccion "questions"

    const questionsRef = database.collection("questions");

    questionsRef.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
        });
    });

  return (
    <div>QuizPage</div>
  )
}

export default QuizPage
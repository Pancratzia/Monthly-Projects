

const QuizPage = () => {

    const name = sessionStorage.getItem("name");

    if (!name) {
      window.location.href = "/";
    }

  return (
    <div>QuizPage</div>
  )
}

export default QuizPage
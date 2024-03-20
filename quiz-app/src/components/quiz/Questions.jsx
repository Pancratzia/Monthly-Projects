import PropTypes from 'prop-types';
import { useQuiz } from '../../hooks/useQuiz';


const Questions = () => {

  const { selectedQuestions, actualQuestion, handleSelectedAnswer } = useQuiz();

  return (
    <div className="question">
      <h2 className="question-text">
        {actualQuestion + 1} - {selectedQuestions[actualQuestion].pregunta}
      </h2>
      <ul className="options">
        {selectedQuestions[actualQuestion].respuestas.map((option, index) => (
          <li key={index}>
            <button onClick={() => handleSelectedAnswer(option.correcta)}>
              {option.texto}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Questions;

Questions.propTypes = {
  selectedQuestions: PropTypes.array.isRequired,
  actualQuestion: PropTypes.number.isRequired,
  handleSelectedAnswer: PropTypes.func.isRequired
}

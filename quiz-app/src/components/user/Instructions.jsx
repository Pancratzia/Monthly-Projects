/* eslint-disable react/no-unescaped-entities */

const Instructions = () => {
  return (
    <div className="instructions-container">
      <h3 className="subtitle">Instructions:</h3>

      <ol className="instructions">
        <li>Enter an original nickname.</li>
        <li>Press "Submit".</li>
        <li>
          There willl be 10 questions, each one with three possible answers, but
          only one will be correct.
        </li>
        <li>
          You'll have 30 seconds to answer each question. If you don't answer in
          time, the question will be skipped.
        </li>
        <li>
          If you answer correctly, you'll get as many points as time left in
          seconds.
        </li>
      </ol>
    </div>
  );
};

export default Instructions;

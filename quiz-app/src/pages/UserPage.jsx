/* eslint-disable react/no-unescaped-entities */
import { useUsers } from "../hooks/useUsers";
import "../assets/styles/userPage.css";

const UserPage = () => {
  const { handleSubmit } = useUsers();

  return (
    <div className="userPage container">
      <h2 className="title">Hi! Do you want to test your knowledge?</h2>

      <div className="instructions-container">
        <h3 className="subtitle">Instructions:</h3>

        <ol className="instructions">
          <li>Enter an original nickname.</li>
          <li>Press "Submit".</li>
          <li>
            There willl be 10 questions, each one with three possible answers,
            but only one will be correct.
          </li>
          <li>
            You'll have 30 seconds to answer each question. If you don't answer
            in time, the question will be skipped.
          </li>
          <li>
            If you answer correctly, you'll get as many points as time left in
            seconds.
          </li>
        </ol>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <label className="label" htmlFor="name">
          Nickname:{" "}
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your nickname"
          className="input"
        />
        <input className="submit" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default UserPage;

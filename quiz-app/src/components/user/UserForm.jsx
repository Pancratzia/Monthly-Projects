import { useUsers } from "../../hooks/useUsers";

const UserForm = () => {
  const { handleSubmit, error } = useUsers();
  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="label" htmlFor="name">
        Nickname:{" "}
      </label>
      <div className="input-container">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your nickname"
          className="input"
        />
        {error && <small className="error">{error}</small>}
      </div>
      <input className="submit" type="submit" value="Submit" />
    </form>
  );
};

export default UserForm;

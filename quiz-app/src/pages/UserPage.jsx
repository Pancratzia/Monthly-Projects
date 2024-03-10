import { useUsers } from "../hooks/useUsers";

const UserPage = () => {
  const { handleSubmit } = useUsers();

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name"

        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default UserPage;

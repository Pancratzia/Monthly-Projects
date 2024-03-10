export const useUsers = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    sessionStorage.setItem("name", name);

    window.location.href = "/quiz";
  };

  return { handleSubmit };
};

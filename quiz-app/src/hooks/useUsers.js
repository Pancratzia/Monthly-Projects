import { database } from "../firebase.js";

export const useUsers = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const name = event.target.name.value;

    if (isNameInRank(name) === true) {
      const confirm = window.confirm(
        "There is already an user with that name. Do you want to overwrite it?"
      );

      if (!confirm) {
        return;
      }
    }

    sessionStorage.setItem("name", name);

    window.location.href = "/quiz";
  };

  const isNameInRank = async (name) => {
    const queryRef = database.collection("rank");
    const querySnapshot = await queryRef.where("nombre", "==", name).get();
    return !querySnapshot.empty;
  };

  return { handleSubmit };
};

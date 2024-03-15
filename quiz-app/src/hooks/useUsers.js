import { useState } from "react";
import { database } from "../firebase.js";
import Swal from "sweetalert2";

export const useUsers = () => {
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const name = event.target.name.value;

    if (!name || name.trim() === "") {
      setError("Nickname is required");
      return;
    }

    if ((await isNameInRank(name)) === true) {
      Swal.fire({
        title: "User already exists",
        text: "Do you want to overwrite it?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#2ecc70",
        cancelButtonColor: "#e74d3c",
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        iconColor: "#f39c12",
      }).then((result) => {
        if (!result.isConfirmed) {
          setError("");
          return;
        }
      });
    }

    sessionStorage.setItem("name", name);
    window.location.href = "/quiz";
  };

  const isNameInRank = async (name) => {
    const queryRef = database.collection("rank");
    const querySnapshot = await queryRef.where("nombre", "==", name).get();
    return !querySnapshot.empty;
  };

  return { handleSubmit, error };
};

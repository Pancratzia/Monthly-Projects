import { useState } from "react";
import Swal from "sweetalert2";
import { isNameInRank } from "../services/userService";

export const useUsers = () => {
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {

    const goToQuiz = (player) => {
      sessionStorage.setItem("name", player);
      window.location.href = "/quiz";

    }
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
        }else if(result.isConfirmed){
          goToQuiz(name);
        }
      });
    }else{
      goToQuiz(name);
    }
  };


  return { handleSubmit, error };
};

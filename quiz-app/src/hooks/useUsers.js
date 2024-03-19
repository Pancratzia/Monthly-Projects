import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { isNameInRank } from "../services/userService";
import { useDispatch } from "react-redux";
import { CLEAR_ERROR, SET_ERROR } from "../store/slices/users/userSlice";


export const useUsers = () => {

  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.users);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {

    const goToQuiz = (player) => {
      sessionStorage.setItem("name", player);
      navigate("/quiz");
    }
    event.preventDefault();

    const name = event.target.name.value;

    if (!name || name.trim() === "") {
      dispatch({ type: SET_ERROR.type, payload: "Name cannot be empty" });
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
          dispatch({ type: CLEAR_ERROR.type });
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

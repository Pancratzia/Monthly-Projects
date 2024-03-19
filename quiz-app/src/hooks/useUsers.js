import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { isNameInRank } from "../services/userService";
import { useDispatch } from "react-redux";
import { CLEAR_ERROR, SET_ERROR } from "../store/slices/users/userSlice";
import { confirmAlertConfig } from "../utils/utils";


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
      Swal.fire(confirmAlertConfig("Nickname already exists", "Do you want to overwrite the score?")).then((result) => {
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

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { isNameInRank } from "../services/userService";
import { useDispatch } from "react-redux";
import { CLEAR_ERROR, SET_ERROR } from "../store/slices/users/userSlice";
import { confirmAlertConfig } from "../utils/utils";
import { useTranslation } from "react-i18next";

export const useUsers = () => {
  sessionStorage.clear();
  const { t } = useTranslation("global");
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.users);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    const goToQuiz = (player) => {
      sessionStorage.setItem("name", player);
      navigate("/quiz");
    };
    event.preventDefault();

    const name = event.target.name.value;

    if (!name || name.trim() === "") {
      dispatch({ type: SET_ERROR.type, payload: t("errors.emptyName") });
      return;
    }

    if ((await isNameInRank(name)) === true) {
      Swal.fire(
        confirmAlertConfig(
          t("Swal.confirmAlertDialog.title"),
          t("Swal.confirmAlertDialog.text"),
          t("Swal.confirmAlertDialog.buttonYes"),
          t("Swal.confirmAlertDialog.buttonNo")
        )
      ).then((result) => {
        if (!result.isConfirmed) {
          dispatch({ type: CLEAR_ERROR.type });
        } else if (result.isConfirmed) {
          goToQuiz(name);
        }
      });
    } else {
      goToQuiz(name);
    }
  };

  return { handleSubmit, error };
};

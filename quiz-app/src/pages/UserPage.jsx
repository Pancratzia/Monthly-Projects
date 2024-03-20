import Instructions from "../components/user/Instructions";
import "../assets/styles/userPage.css";
import UserForm from "../components/user/UserForm";
import { useTranslation } from "react-i18next";


const UserPage = () => {
  
  const { t } = useTranslation("global");

  return (
    <div className="userPage container">
      <h2 className="title">{t("userPage.title")}</h2>

      <Instructions />

      <UserForm />
      
    </div>
  );
};

export default UserPage;

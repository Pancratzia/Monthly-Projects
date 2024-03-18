/* eslint-disable react/no-unescaped-entities */
import Instructions from "../components/user/Instructions";
import "../assets/styles/userPage.css";
import UserForm from "../components/user/UserForm";

const UserPage = () => {
  

  return (
    <div className="userPage container">
      <h2 className="title">Hi! Do you want to test your knowledge?</h2>

      <Instructions />

      <UserForm />
      
    </div>
  );
};

export default UserPage;

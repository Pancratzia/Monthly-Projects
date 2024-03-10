import { Route, Routes } from "react-router-dom";
import UserPage from "./pages/UserPage";
import QuizPage from "./pages/QuizPage";
import RankingPage from "./pages/RankingPage";
import ErrorPage from "./pages/ErrorPage";

const AppRoutes = () => {

  const name = sessionStorage.getItem("name");

  return (
    <Routes>
      <Route path="/" element={<UserPage />} />
      {name && <Route path="/quiz" element={<QuizPage />} />}
      <Route path="/ranking" element={<RankingPage />} />

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AppRoutes;

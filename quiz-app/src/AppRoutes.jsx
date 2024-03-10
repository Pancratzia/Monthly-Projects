import { Route, Routes } from "react-router-dom";
import UserPage from "./pages/UserPage";
import QuizPage from "./pages/QuizPage";
import RankingPage from "./pages/RankingPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<UserPage />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/ranking" element={<RankingPage />} />
    </Routes>
  );
};

export default AppRoutes;

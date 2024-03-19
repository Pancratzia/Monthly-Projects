import { Route, Routes} from "react-router-dom";
import PropTypes from "prop-types";
import UserPage from "./pages/UserPage";
import QuizPage from "./pages/QuizPage";
import RankingPage from "./pages/RankingPage";
import ErrorPage from "./pages/ErrorPage";
import MainLayout from "./components/layouts/MainLayout";

const AppRoutes = () => {


  return (
    <Routes>
      <Route
        path="/"
        element={<MainLayout page="home"><UserPage /></MainLayout>}
      />
      <Route path="/quiz" element={<QuizPage />} />
      <Route
        path="/ranking"
        element={<MainLayout page="ranking"><RankingPage /></MainLayout>}
      />
      <Route path="*" element={<MainLayout page="error"><ErrorPage /></MainLayout>} />
    </Routes>
  );
};

export default AppRoutes;

AppRoutes.propTypes = {
  page: PropTypes.string,
  children: PropTypes.node
}

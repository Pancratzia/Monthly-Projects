import PhoneLayout from "./components/layouts/PhoneLayout";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

const AppRoutes = () => {
  return (
    <div className="min-h-screen w-screen bg-purple-950 flex justify-center items-center py-2 font-rubik">
    <PhoneLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/historial" element={<h1>Historial</h1>} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </PhoneLayout>

    </div>
  );
};

export default AppRoutes;

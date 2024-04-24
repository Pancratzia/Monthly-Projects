import PhoneLayout from "./components/layouts/PhoneLayout";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Configuration from "./pages/Configuration";

const AppRoutes = () => {
  return (
    <div className="min-h-screen w-screen bg-purple-950 flex justify-center items-center py-2 font-rubik">
    <PhoneLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/historial" element={<h1>Historial</h1>} />
        <Route path="/configuracion" element={<Configuration />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </PhoneLayout>

    </div>
  );
};

export default AppRoutes;

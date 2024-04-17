import PhoneLayout from "./components/layouts/PhoneLayout";

import { Routes, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <div className="min-h-screen w-screen bg-purple-950 flex justify-center items-center py-2">
    <PhoneLayout>
      <Routes>
        <Route path="/" element={<h1>Hola</h1>} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </PhoneLayout>

    </div>
  );
};

export default AppRoutes;

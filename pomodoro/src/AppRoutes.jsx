import PhoneLayout from "./components/layouts/PhoneLayout";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Configuration from "./pages/Configuration";
import { usePomodoro } from "./hooks/usePomodoro";

const AppRoutes = () => {

  const [
    time,
    activity,
    percentage,
    toogleTime,
    isTimerRunning,
    resetTimer,
    activityHasAName,
    activityName,
    submitActivity,
    errors,
    currentCicle,
    cicles,
    timeDivision,
    handleSaveConfig
  ] = usePomodoro();

  return (
    <div className="min-h-screen w-screen bg-purple-950 flex justify-center items-center py-2 font-rubik">
    <PhoneLayout>
      <Routes>
        <Route path="/" element={<Home time={time} activity={activity} percentage={percentage} toogleTime={toogleTime} isTimerRunning={isTimerRunning} resetTimer={resetTimer} activityHasAName={activityHasAName} activityName={activityName} submitActivity={submitActivity} errors={errors} currentCicle={currentCicle} cicles={cicles} timeDivision={timeDivision} />} />
        <Route path="/historial" element={<h1>Historial</h1>} />
        <Route path="/configuracion" element={<Configuration handleSaveConfig={handleSaveConfig} />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </PhoneLayout>

    </div>
  );
};

export default AppRoutes;

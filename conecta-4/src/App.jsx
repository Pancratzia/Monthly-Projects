import Turns from "./components/Turns";
import Stadistics from "./components/Stadistics";
import Board from "./components/Board";
import { GameProvider } from "./context/GameProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <div className="title-container">
        <h1 className="title">Conecta 4</h1>
      </div>

      <GameProvider>
        <div className="container">
          <Turns />

          <Board />

          <Stadistics />
        </div>

        <ToastContainer
          position="bottom-right"
          autoClose={1000}
          limit={1}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover={false}
          theme="light"
          transition={"Bounce"}
        />
        <ToastContainer />
      </GameProvider>
    </>
  );
}

export default App;

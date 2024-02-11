import Turns from "./components/Turns";
import Stadistics from "./components/Stadistics";
import Board from "./components/Board";
import { GameProvider } from "./context/GameProvider";

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
      </GameProvider>
    </>
  );
}

export default App;

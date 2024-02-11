import Turns from "./components/Turns";
import Stadistics from "./components/Stadistics";
import Board from "./components/Board";
import useGame from "./hooks/useGame";

function App() {

  const { board, turn, points, handleClick, handleReset, handleResetPoints } = useGame();

  return (
    <>
      <div className="title-container">
        <h1 className="title">Conecta 4</h1>
      </div>

      <div className="container">
        <Turns turn={turn} />

        <Board
          board={board}
          handleClick={handleClick}
          handleReset={handleReset}
          handleResetPoints={handleResetPoints}
        />

        <Stadistics points={points} />
      </div>
    </>
  );
}

export default App;

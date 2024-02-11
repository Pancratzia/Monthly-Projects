import { useContext } from "react";
import Buttons from "./Buttons";
import { GameContext } from "../context/GameContext";
const Board = () => {
  const { board, handleClick } =
    useContext(GameContext);
  return (
    <div className="board">
      {board.map((row, rowIndex) =>
        row.map((cell, cellIndex) => (
          <div key={`${rowIndex}-${cellIndex}`} className="board__cell">
            <div
              className={
                cell === "1"
                  ? "board__circle--red board__circle"
                  : cell === "2"
                  ? "board__circle--yellow board__circle"
                  : "board__circle"
              }
              onClick={() => handleClick(cellIndex)}
            ></div>
          </div>
        ))
      )}
      <Buttons/>
    </div>
  );
};

export default Board;

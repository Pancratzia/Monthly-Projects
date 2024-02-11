import PropTypes from "prop-types";
import Buttons from "./Buttons";
const Board = ({ board, handleClick, handleReset, handleResetPoints }) => {
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
      <Buttons handleReset={handleReset} handleResetPoints={handleResetPoints} />
    </div>
  );
};

export default Board;

Board.propTypes = {
  board: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  handleResetPoints: PropTypes.func.isRequired
}
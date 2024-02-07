import { useState } from "react";

const INITIAL_BOARD = [
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
];

function App() {
  const [board, setBoard] = useState(INITIAL_BOARD);
  const [turn, setTurn] = useState("1");
  const [winner, setWinner] = useState(0);

  const checkFullBoard = () => {
    return board.every((row) => row.every((cell) => cell !== ""));
  };

  const checkWinningPossibilities = (row, col) => {
    for (let i = 0; i < 6; i++) {
      if (board[i][col] === turn) {
        if (i - 3 >= 0) {
          if (
            board[i - 1][col] === turn &&
            board[i - 2][col] === turn &&
            board[i - 3][col] === turn
          ) {
            setWinner(turn);
            return;
          }
        }
      }
    }

    for (let i = 0; i < 7; i++) {
      if (board[row][i] === turn) {
        if (i - 3 >= 0) {
          if (
            board[row][i - 1] === turn &&
            board[row][i - 2] === turn &&
            board[row][i - 3] === turn
          ) {
            setWinner(turn);
            return;
          }
        }
      }
    }

    if (row - 3 >= 0 && col - 3 >= 0) {
      if (
        board[row - 1][col - 1] === turn &&
        board[row - 2][col - 2] === turn &&
        board[row - 3][col - 3] === turn
      ) {
        setWinner(turn);
        return;
      }
    }
  };

  const checkBoard = (row, col) => {
    checkWinningPossibilities(row, col);

    if (winner !== 0) {
      alert(`Player ${winner} wins!`);
      return;
    }

    if (checkFullBoard()) {
      alert("Board is full");
      return;
    }
  };

  const handleClick = (col) => {
    if (winner !== 0) {
      alert(`There is a winner! Player ${winner} wins!`);
      return;
    }
    if (checkFullBoard()) {
      alert("Board is full");
      return;
    }

    const newBoard = [...board];

    for (let i = 5; i >= 0; i--) {
      if (newBoard[i][col] === "") {
        newBoard[i][col] = turn;
        setTurn(turn === "1" ? "2" : "1");
        setBoard(newBoard);
        checkBoard(i, col);
        return;
      }
    }

    alert("Column is full");
  };

  return (
    <>
      <div className="container">
        <div className="board">
          {board.map((row, rowIndex) =>
            row.map((cell, cellIndex) => (
              <div key={`${rowIndex}-${cellIndex}`} className="cell">
                <div
                  className={
                    cell === "1"
                      ? "circle-red circle"
                      : cell === "2"
                      ? "circle-yellow circle"
                      : "circle"
                  }
                  onClick={() => handleClick(cellIndex)}
                ></div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default App;

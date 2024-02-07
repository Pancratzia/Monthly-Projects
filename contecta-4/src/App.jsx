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
    const directions = [
      [[0, -1], [0, 1]], // Horizontal
      [[-1, 0], [1, 0]], // Vertical
      [[-1, -1], [1, 1]], // Diagonal superior izquierda a inferior derecha
      [[-1, 1], [1, -1]], // Diagonal superior derecha a inferior izquierda
    ];
  
    for (let i = 0; i < directions.length; i++) {
      let count = 1;
  
      for (let j = 0; j < 2; j++) {
        const [dx, dy] = directions[i][j];
        let r = row + dx;
        let c = col + dy;
  
        while (r >= 0 && r < 6 && c >= 0 && c < 7 && board[r][c] === turn) {
          count++;
          r += dx;
          c += dy;
        }
      }
  
      if (count >= 4) {
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

import { useState } from "react";
import confetti from "canvas-confetti";
import Turns from "./components/Turns";

function App() {
  const [board, setBoard] = useState([
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
  ]);
  const [turn, setTurn] = useState("1");
  const [winner, setWinner] = useState(0);
  const [points, setPoints] = useState({
    1: 0,
    2: 0,
  });

  const checkFullBoard = () => {
    return board.every((row) => row.every((cell) => cell !== ""));
  };

  const checkWinningPossibilities = (row, col) => {
    const directions = [
      [
        [0, -1],
        [0, 1],
      ],
      [
        [-1, 0],
        [1, 0],
      ],
      [
        [-1, -1],
        [1, 1],
      ],
      [
        [-1, 1],
        [1, -1],
      ],
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
        alert(`Player ${turn} wins!`);
        confetti();
        setWinner(turn);
        setPoints({
          ...points,
          [turn]: points[turn] + 1,
        });
        handleReset();
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
      alert("It's a draw!");
      handleReset();
      return;
    }
  };

  const handleClick = (col) => {
    if (checkFullBoard()) {
      alert("The board is full");
      return;
    }

    if (winner !== 0) {
      alert(`There is a winner! Player ${winner} wins!`);
      return;
    }

    const newBoard = [...board];

    for (let i = 5; i >= 0; i--) {
      if (newBoard[i][col] === "") {
        newBoard[i][col] = turn;
        setBoard(newBoard);
        setTurn(turn === "1" ? "2" : "1");
        setTimeout(() => checkBoard(i, col), 100);
        return;
      }
    }

    alert("Column is full");
  };

  const handleReset = () => {
    setBoard([
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
    ]);
    setTurn("1");
    setWinner(0);
  };

  const handleResetPoints = () => {
    setPoints({
      1: 0,
      2: 0,
    });
    handleReset();
  };

  return (
    <>
      <div className="title-container">
        <h1 className="title">Conecta 4</h1>
      </div>

      <div className="container">
        
        <Turns turn={turn} />

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
          <div className="buttons">
            <button className="btn btn--reset" onClick={handleReset}>
              Reset
            </button>
            <button
              className="btn btn--resetPoints"
              onClick={handleResetPoints}
            >
              Reset Points
            </button>
          </div>
        </div>

        <div className="stadistics">
          <div className="stadistics__points">
            <h3 className="stadistics__player-name stadistics__player-name--red stadistics__h3">
              Player 1:
            </h3>
            <h3 className="stadistics__actual-points stadistics__h3 stadistics__actual-points--red">
              {points[1]}
            </h3>
          </div>
          <div className="stadistics__points">
            <h3 className="stadistics__player-name stadistics__player-name--yellow stadistics__h3">
              Player 2:
            </h3>
            <h3 className="stadistics__actual-points stadistics__h3 stadistics__actual-points--yellow">
              {points[2]}
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

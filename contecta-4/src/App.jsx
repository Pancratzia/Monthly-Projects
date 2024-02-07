import { useState } from "react";

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
      [[0, -1], [0, 1]],
      [[-1, 0], [1, 0]],
      [[-1, -1], [1, 1]],
      [[-1, 1], [1, -1]],
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
        setWinner(turn);
        setPoints({
          ...points,
          [turn]: points[turn] + 1,
        });
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
  }

  const handleResetPoints = () => {
    setPoints({
      1: 0,
      2: 0,
    });
    handleReset();
  }

  return (
    <>
      <div className="container">
        <div className="stadistics">
          <div className="points">
            <h3>Player 1</h3>
            <h3>{points[1]}</h3>
          </div>
          <div className="points">
            <h3>Player 2</h3>
            <h3>{points[2]}</h3>
          </div>
        </div>
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
          <div className="buttons">
            <button className="reset" onClick={handleReset}>Reset</button>
            <button className="resetPoints" onClick={handleResetPoints}>Reset Points</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

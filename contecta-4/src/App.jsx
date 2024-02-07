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

  const handleClick = (col) => {
    console.log(col);
    const newBoard = [...board];

    for (let i = 5; i >= 0; i--) {
      if (newBoard[i][col] === "") {
        newBoard[i][col] = turn;
        setTurn(turn === "1" ? "2" : "1");
        setBoard(newBoard);
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

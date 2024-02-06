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

  return (
    <>
      <div className="container">
        <div className="board">
          {board.map((row, rowIndex) =>
            row.map((cell, cellIndex) => (
              <div
                key={`${rowIndex}-${cellIndex}`}
                className="cell" >
                <div className="circle">
                  {cell}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default App;

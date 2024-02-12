import confetti from "canvas-confetti";
import { useEffect, useState } from "react";

const useGame = () => {
  const [board, setBoard] = useState(() => {
    const storedBoard = localStorage.getItem("board");
    return storedBoard ? JSON.parse(storedBoard) : getInitialBoard();
  });
  const [turn, setTurn] = useState(() => {
    const storedTurn = localStorage.getItem("turn");
    return storedTurn ? storedTurn : "1";
  });
  const [winner, setWinner] = useState(() => {
    const storedWinner = localStorage.getItem("winner");
    return storedWinner ? parseInt(storedWinner) : 0;
  });
  const [points, setPoints] = useState(() => {
    const storedPoints = localStorage.getItem("points");
    return storedPoints ? JSON.parse(storedPoints) : { 1: 0, 2: 0 };
  });

  useEffect(() => {
    localStorage.setItem("board", JSON.stringify(board));
    localStorage.setItem("turn", turn);
    localStorage.setItem("winner", winner.toString());
    localStorage.setItem("points", JSON.stringify(points));
  }, [board, turn, winner, points]);

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
    setBoard(getInitialBoard());
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

  function getInitialBoard() {
    return [
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
    ];
  }

  return {
    board,
    turn,
    winner,
    points,
    handleClick,
    handleReset,
    handleResetPoints,
  };
};

export default useGame;

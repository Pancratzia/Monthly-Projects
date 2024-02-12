import PropTypes from "prop-types";
import useGame from "../hooks/useGame";
import { GameContext } from "./GameContext";

export const GameProvider = ({ children }) => {
  const {
    board,
    turn,
    winner,
    points,
    handleClick,
    handleReset,
    handleResetPoints,
  } = useGame();

  return (
    <GameContext.Provider
      value={{
        board,
        turn,
        winner,
        points,
        handleClick,
        handleReset,
        handleResetPoints,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

GameProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

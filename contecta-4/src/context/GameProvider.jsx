import PropTypes from "prop-types";
import useGame from "../hooks/useGame";
import { GameContext } from "./GameContext";

const GameProvider = ({ children }) => {
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

export default GameProvider;

GameProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

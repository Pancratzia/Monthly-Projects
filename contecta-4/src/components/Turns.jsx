import { useContext } from "react";
import { GameContext } from "../context/GameContext";

const Turns = () => {

  const { turn } = useContext(GameContext);
  
  return (
    <div className="turns">
      <div
        className={`turns__player turns__player-1 ${
          turn === "1" ? "active" : ""
        }`}
      ></div>
      <div
        className={`turns__player turns__player-2 ${
          turn === "2" ? "active" : ""
        }`}
      ></div>
    </div>
  );
};

export default Turns;

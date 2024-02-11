import { useContext } from "react";
import { GameContext } from "../context/GameContext";

const Buttons = () => {

  const { handleReset, handleResetPoints } = useContext(GameContext);
  return (
    <div className="buttons">
        <button className="btn btn--reset" onClick={handleReset}>
          Reset
        </button>
        <button className="btn btn--resetPoints" onClick={handleResetPoints}>
          Reset Points
        </button>
      </div>
  )
}

export default Buttons;
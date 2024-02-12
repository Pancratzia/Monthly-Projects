import { GameContext } from "../context/GameContext";
import { useContext } from "react";

const Stadistics = () => {

  const { points } = useContext(GameContext);
  return (
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
  )
}

export default Stadistics;
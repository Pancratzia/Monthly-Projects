import { useContext } from "react";
import { CharacterContext } from "../../context/CharacterContext";
import { PlanetsContext } from "../../context/PlanetsContext";
export const Modal = () => {
  const { selectedCharacter, closeModal } = useContext(CharacterContext);
  const { planets } = useContext(PlanetsContext);
  const {
    name,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender,
    homeworld,
  } = selectedCharacter;

  const homeworldNumber = +homeworld.split("/")[5];

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <button className="close" onClick={closeModal}>
            &times;
          </button>
        </div>
        <div className="modal-body">
          <h2 className="modal-title">{name}</h2>

          <div className="subtitles">
            {homeworld && (
              <h4 className="modal-subtitle">
                Homeworld: {planets[homeworldNumber - 1]}
              </h4>
            )}
            <h4 className="modal-subtitle">Birth Year: {birth_year}</h4>
          </div>
          <ul className="modal-main-info">
            <li>
              <span>Gender:</span> {gender.toUpperCase()}
            </li>
            <li>
              <span>Height:</span> {height} cm
            </li>
            <li>
              <span>Mass:</span> {mass} kg
            </li>
            <li>
              <span>Hair Color:</span> {hair_color}
            </li>
            <li>
              <span>Skin Color:</span> {skin_color}
            </li>
            <li>
              <span>Eye Color:</span> {eye_color}
            </li>
          </ul>

          <ul className="modal-side-info"></ul>
        </div>
      </div>
    </div>
  );
};

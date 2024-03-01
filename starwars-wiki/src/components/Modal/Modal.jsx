import { useCharacterModal } from "../../hooks/useCharacterModal";


export const Modal = () => {
  const {
    name,
    homeworldName,
    birth_year,
    gender,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    closeModal,
    characterFilms,
    characterVehicles,
    characterStarships,
  } = useCharacterModal();

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
            {homeworldName && (
              <h4 className="modal-subtitle">Homeworld: {homeworldName}</h4>
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

          {((characterVehicles.length > 0 ||
            (characterStarships.length > 0)) && (
              <ul className="modal-side-info">
                {characterVehicles.length > 0 && (
                  <li className="modal-side-info-item">
                    <span>Vehicles </span>
                    <ul>
                      {characterVehicles.map((vehicle, idx) => {
                        return <li key={idx}>{vehicle}</li>;
                      })}
                    </ul>
                  </li>
                )}

                {characterStarships.length > 0 && (
                  <li className="modal-side-info-item">
                    <span>Starships</span>
                    <ul>
                      {characterStarships.map((starship, idx) => {
                        return <li key={idx}>{starship}</li>;
                      })}
                    </ul>
                  </li>
                )}
              </ul>
            ))}

          <footer className="modal-footer">
            <h5>Films</h5>
            <ul className="films">
              {characterFilms.map((film, idx) => {
                return <li key={idx}>{film}</li>;
              })}
            </ul>
          </footer>
        </div>
      </div>
    </div>
  );
};

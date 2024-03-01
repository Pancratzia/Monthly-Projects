import { useContext } from "react";
import { CharacterContext } from "../../context/CharacterContext";
import { PlanetContext } from "../../context/PlanetContext";
import { FilmContext } from "../../context/FilmContext";
import { VehicleContext } from "../../context/VehicleContext";
import { StarshipContext } from "../../context/StarshipContext";
import { useFetch } from "../../hooks/useFetch";

export const Modal = () => {
  const { selectedCharacter, closeModal } = useContext(CharacterContext);
  const { planets } = useContext(PlanetContext);
  const { films } = useContext(FilmContext);
  const { vehicles } = useContext(VehicleContext);
  const { starships } = useContext(StarshipContext);
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

  const homeworldNumber = extractNumberFromUrl(homeworld);
  const homeworldName = planets[homeworldNumber - 1];

  const characterFilms = findSelectedCharacterProperty(
    selectedCharacter.films,
    films,
    "https://swapi.dev/api/films"
  );
  const characterVehicles = findSelectedCharacterProperty(
    selectedCharacter.vehicles,
    vehicles,
    "https://swapi.dev/api/vehicles"
  );
  const characterStarships = findSelectedCharacterProperty(
    selectedCharacter.starships,
    starships,
    "https://swapi.dev/api/starships"
  );

  function extractNumberFromUrl(url) {
    return +url.split("/")[5];
  }

  function findSelectedCharacterProperty(propertyArray, propertyContext, fetchUrl = "https://swapi.dev/api") {
    const propertyNumbers = propertyArray.map((item) => extractNumberFromUrl(item));
    const propertyTitles = propertyNumbers.map((itemNumber) => {
      if (itemNumber !== undefined && propertyContext[itemNumber - 1] === undefined) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const { data, loading, error } = useFetch(`${fetchUrl}/${itemNumber}`);
        if (!loading && !error && data) {
          return data.name;
        }
      }
      return propertyContext[itemNumber - 1];
    });
    return propertyTitles;
  }

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

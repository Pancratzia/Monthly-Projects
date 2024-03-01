import { useContext } from 'react';
import { CharacterContext } from '../context/CharacterContext';
import { PlanetContext } from '../context/PlanetContext';
import { FilmContext } from '../context/FilmContext';
import { VehicleContext } from '../context/VehicleContext';
import { StarshipContext } from '../context/StarshipContext';
import { useFetch } from '../hooks/useFetch';

export const useCharacterModal = () => {
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
    'https://swapi.dev/api/films'
  );
  const characterVehicles = findSelectedCharacterProperty(
    selectedCharacter.vehicles,
    vehicles,
    'https://swapi.dev/api/vehicles'
  );
  const characterStarships = findSelectedCharacterProperty(
    selectedCharacter.starships,
    starships,
    'https://swapi.dev/api/starships'
  );

  function extractNumberFromUrl(url) {
    return +url.split('/')[5];
  }

  function findSelectedCharacterProperty(propertyArray, propertyContext, fetchUrl = 'https://swapi.dev/api') {
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

  return {
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
  };
};

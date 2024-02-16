import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function useFetch(url, multipleUrl = false) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async (url) => {
      try {
        const res = await fetch(url);
        const dataRes = await res.json();
        setData((prevData) => ({ ...prevData, ...dataRes }));
        if (dataRes.next !== null && multipleUrl) {
          await fetchData(dataRes.next);
        } else {
          setLoading(false);
        }
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData(url);
  }, [url, multipleUrl]);

  return { data, loading, error };
}

function App() {
  const { data, loading, error } = useFetch(
    "https://swapi.dev/api/people/",
    true
  );
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    if (data !== null && data.results !== null) {
      setCharacters((prevCharacters) => [
        ...prevCharacters,
        ...data.results.filter(
          (newCharacter) =>
            !prevCharacters.some(
              (prevCharacter) => prevCharacter.name === newCharacter.name
            )
        ),
      ]);
    }
  }, [data]);

  return (
    <>
      <h1>Star Wars Wiki</h1>
      {error && <p>{error.message}</p>}
      {loading && <p>Loading...</p>}
      {characters.map((character) => (
        <p key={character.name}>{character.name}</p>
      ))}
    </>
  );
}

export default App;

useFetch.propTypes = {
  url: PropTypes.string.isRequired,
};
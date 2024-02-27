import { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";

function useFetch(url, multipleUrl = false) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(
    async (fetchUrl) => {
      try {
        const res = await fetch(fetchUrl);
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
    },
    [multipleUrl]
  );

  useEffect(() => {
    if (!data) {
      fetchData(url);
    }
  }, [url, data, fetchData]);

  return { data, loading, error };
}

function App() {
  const { data, loading, error } = useFetch(
    "https://swapi.dev/api/people/",
    true
  );
  const [characters, setCharacters] = useState(new Set());

  const [slicedCharacters, setSlicedCharacters] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (data && data.results) {
      const newCharacters = data.results.filter(
        (newCharacter) => !characters.has(newCharacter.name)
      );
      setCharacters(
        (prevCharacters) =>
          new Set([
            ...prevCharacters,
            ...newCharacters.map((char) => char.name),
          ])
      );
    }

    if (slicedCharacters.length === 0) {
      sliceCharacters();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const sliceCharacters = () => {
    const newCharacters = [...characters];
    setSlicedCharacters(newCharacters.slice(0,  page * 10));
    setPage((prevPage) => prevPage + 1);
  }

  return (
    <>
      <h1>Star Wars Wiki</h1>
      {error && <p>{error.message}</p>}
      {loading && <p>Loading...</p>}
      {slicedCharacters.map((characterName) => (
        <p key={characterName}>{characterName}</p>
      ))}
    </>
  );
}

export default App;

useFetch.propTypes = {
  url: PropTypes.string.isRequired,
};
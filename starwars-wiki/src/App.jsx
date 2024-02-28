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
      const newCharacters = data.results.map((newCharacter) => newCharacter);
      setCharacters((prevCharacters) => new Set([...prevCharacters, ...newCharacters]));
    }
  }, [data]);

  useEffect(() => {
    if(!loading) sliceCharacters();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [characters, page]);

  const sliceCharacters = () => {
    const newCharacters = [...characters];
    const start = (page - 1) * 10;
    const end = start + 10;
    setSlicedCharacters(newCharacters.slice(start, end));
  };

  const handleChangePage = (action) => {
    let newPage = page;

    if (action === "next" && page < Math.ceil(characters.size / 10)) {
      newPage++;
    } else if (action === "prev" && page > 1) {
      newPage--;
    }

    setPage(newPage);
  };

  console.log(characters);
  return (
    <>
      <h1>Star Wars Wiki</h1>
      {error && <p>{error.message}</p>}
      {loading && <p>Loading...</p>}
      {slicedCharacters.map(({ name, height, mass, hair_color, skin_color, eye_color, birth_year, gender }, idx) => (
        <div className="card" key={idx}>
          <h2>{name}</h2>
          <p>Gender: {gender}</p>
          <ul>
            <li>Height: {height}</li>
            <li>Mass: {mass}</li>
            <li>Hair Color: {hair_color}</li>
            <li>Skin Color: {skin_color}</li>
            <li>Eye Color: {eye_color}</li>
            <li>Birth Year: {birth_year}</li>
          </ul>
        </div>
      ))}
      {characters.size > 10 && !loading && (
        <div className="buttons">
          <button
            onClick={() => handleChangePage("prev")}
            disabled={page === 1}
            type="button"
          >
            {"<"}
          </button>
          <button
            onClick={() => handleChangePage("next")}
            disabled={page >= Math.ceil(characters.size / 10)}
            type="button"
          >
            {">"}
          </button>
        </div>
      )}
    </>
  );
}


export default App;

useFetch.propTypes = {
  url: PropTypes.string.isRequired,
};

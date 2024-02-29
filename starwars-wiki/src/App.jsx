import { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import { memo } from "react";
import StarfieldAnimation from "react-starfield-animation";

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

// eslint-disable-next-line react/display-name
export const Background = memo(() => {
  const [containerWidth, setContainerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setContainerWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <StarfieldAnimation
      key={containerWidth}
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
      }}
      numParticles={800}
      dx={0.000000001}
      dy={0.000000001}
    />
  );
});

function App() {
  const { data, loading, error } = useFetch(
    "https://swapi.dev/api/people/",
    true
  );

  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [slicedCharacters, setSlicedCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (data && data.results) {
      const newCharacters = data.results.map((newCharacter) => newCharacter);
      setCharacters((prevCharacters) => [...prevCharacters, ...newCharacters]);
    }
  }, [data]);

  useEffect(() => {
    if (characters.length > 0) {
      filterCharacters();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [characters, search]);

  useEffect(() => {
    if (!loading) {
      sliceCharacters();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredCharacters, page, loading]);

  const filterCharacters = () => {
    const newCharacters = characters.filter((character) =>
      character.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredCharacters(newCharacters);
  };

  const sliceCharacters = () => {
    const start = (page - 1) * 10;
    const end = start + 10;
    setSlicedCharacters(filteredCharacters.slice(start, end));
  };

  const handleChangePage = (action) => {
    let newPage = page;

    if (action === "next" && page < Math.ceil(filteredCharacters.length / 10)) {
      newPage++;
    } else if (action === "prev" && page > 1) {
      newPage--;
    }

    setPage(newPage);
  };

  return (
    <>
      <header className="header">
        <Background />
        <img
          className="image"
          src="/img/logo-StarWars.png"
          alt="Star Wars Logo"
        />

        <h1 className="title">Star Wars Wiki</h1>
        <p className="by">
          By:{" "}
          <a
            className="link"
            target="_blank"
            href="https://github.com/Pancratzia"
          >
            Pancratzia
          </a>
        </p>
        <small className="powered">
          Powered by{" "}
          <a className="link" target="_blank" href="https://swapi.dev/">
            Star Wars API
          </a>
        </small>
      </header>

      <div className="search-bar container">
        <input
          className="search"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search your character by name..."
        />
      </div>

      <div className="messages container">
        {error && <p className="alert error">{error.message}</p>}
        {loading && <p className="alert loading">Loading...</p>}

        
      </div>

      <main className="main container">
        {slicedCharacters.map(
          (
            {
              name,
              height,
              mass,
              hair_color,
              skin_color,
              eye_color,
              birth_year,
              gender,
            },
            idx
          ) => (
            <div className="card" key={idx}>
              <h2>{name}</h2>
              <p>Gender: {gender}</p>
              <ul>
                <li>Height: {height} cm</li>
                <li>Mass: {mass} kg</li>
                <li>Hair Color: {hair_color}</li>
                <li>Skin Color: {skin_color}</li>
                <li>Eye Color: {eye_color}</li>
                <li>Birth Year: {birth_year}</li>
              </ul>
            </div>
          )
        )}

        {(filteredCharacters.length > 10 && !loading) && (
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
              disabled={page >= Math.ceil(filteredCharacters.length / 10)}
              type="button"
            >
              {">"}
            </button>
          </div>
        ) 
        }

        {(filteredCharacters.length === 0 && !loading) && (
          <div className="not-found">
            <p className="not-found-text">No characters found</p>
          </div>
        )}
        
        
      </main>
    </>
  );
}

export default App;

useFetch.propTypes = {
  url: PropTypes.string.isRequired,
};

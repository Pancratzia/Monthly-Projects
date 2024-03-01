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

export const Info = ({ copy = false }) => {
  return (
    <div className="info">
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
          The Star Wars API
        </a>
      </small>

      {copy && (
        <small className="copyright">&copy; 2024 - All rights reserved</small>
      )}
    </div>
  );
};

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

  const CHARACTERS_PER_PAGE = 6;

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
    setPage(1);
    const newCharacters = characters.filter((character) =>
      character.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredCharacters(newCharacters);
  };

  const sliceCharacters = () => {
    const start = (page - 1) * CHARACTERS_PER_PAGE;
    const end = start + CHARACTERS_PER_PAGE;
    setSlicedCharacters(filteredCharacters.slice(start, end));
  };

  const handleChangePage = (action) => {
    let newPage = page;

    if (action === "next" && page < Math.ceil(filteredCharacters.length / CHARACTERS_PER_PAGE)) {
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

        <Info />
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

      {filteredCharacters.length > CHARACTERS_PER_PAGE && !loading && (
          <div className="buttons">
            <button
              className="button"
              onClick={() => handleChangePage("prev")}
              disabled={page === 1}
              type="button"
            >
              {"<"}
            </button>
            <p className="page">{page}/{Math.ceil(filteredCharacters.length / CHARACTERS_PER_PAGE)}</p>
            <button
              className="button"
              onClick={() => handleChangePage("next")}
              disabled={page >= Math.ceil(filteredCharacters.length / CHARACTERS_PER_PAGE)}
              type="button"
            >
              {">"}
            </button>
          </div>
        )}

        <div className="cards">
          {slicedCharacters.map((character, idx) => (
            <div className="card" key={idx}>
              <h2>{character.name}</h2>
            </div>
          ))}

          {filteredCharacters.length === 0 && !loading && (
            <div className="not-found">
              <p className="not-found-text">No characters found</p>
            </div>
          )}
        </div>

        
      </main>

      <footer className="footer">
        <Info copy={true} />
      </footer>
    </>
  );
}

export default App;

useFetch.propTypes = {
  url: PropTypes.string.isRequired,
};

Info.propTypes = {
  copy: PropTypes.bool,
};

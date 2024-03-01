import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Background } from "./components/Background/Background";
import { Info } from "./components/Info/Info";
import { Modal } from "./components/Modal/Modal";
import { useFetch } from "./hooks/useFetch";

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
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

    if (
      action === "next" &&
      page < Math.ceil(filteredCharacters.length / CHARACTERS_PER_PAGE)
    ) {
      newPage++;
    } else if (action === "prev" && page > 1) {
      newPage--;
    }

    setPage(newPage);
  };

  const openModal = (character) => {
    setSelectedCharacter(character);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCharacter(null);
    setIsModalOpen(false);
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
            <p className="page">
              {page}/
              {Math.ceil(filteredCharacters.length / CHARACTERS_PER_PAGE)}
            </p>
            <button
              className="button"
              onClick={() => handleChangePage("next")}
              disabled={
                page >=
                Math.ceil(filteredCharacters.length / CHARACTERS_PER_PAGE)
              }
              type="button"
            >
              {">"}
            </button>
          </div>
        )}

        <div className="cards">
          {slicedCharacters.map((character, idx) => (
            <div
              className="card"
              key={idx}
              onClick={() => openModal(character)}
            >
              <h2>{character.name}</h2>
            </div>
          ))}

          {filteredCharacters.length === 0 && !loading && (
            <div className="not-found">
              <p className="not-found-text">No characters found</p>
            </div>
          )}
        </div>

        {isModalOpen && (
          <Modal character={selectedCharacter} closeModal={closeModal} />
        )}
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

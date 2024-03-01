import { useContext } from "react";
import { Background } from "./components/Background/Background";
import { Info } from "./components/Info/Info";
import { Modal } from "./components/Modal/Modal";
import { CharacterContext } from "./context/CharacterContext";


function App() {
  const {  error, loading, search, setSearch, page, handleChangePage, openModal, isModalOpen, filteredCharacters, CHARACTERS_PER_PAGE, slicedCharacters } = useContext(CharacterContext);

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
          <Modal />
        )}
      </main>

      <footer className="footer">
        <Info copy={true} />
      </footer>
    </>
  );
}

export default App;


import { useContext } from "react";
import { CharacterContext } from "../../../context/CharacterContext";
import { Modal } from "../../Modal/Modal";

export const Main = () =>{

    const { loading, page, handleChangePage, openModal, isModalOpen, filteredCharacters, CHARACTERS_PER_PAGE, slicedCharacters } = useContext(CharacterContext);

    return(
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
    );
}
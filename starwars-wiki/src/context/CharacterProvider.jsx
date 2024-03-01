import PropTypes from "prop-types";
import { useCharacters } from "../hooks/useCharacters";
import { CharacterContext } from "./CharacterContext";

export const CharacterProvider = ({ children }) => {
  const {
    characters,
    slicedCharacters,
    filteredCharacters,
    search,
    setSearch,
    page,
    setPage,
    handleChangePage,
    openModal,
    closeModal,
    selectedCharacter,
    setSelectedCharacter,
    isModalOpen,
    setIsModalOpen,
    loading,
    error,
  } = useCharacters();

  return (
    <CharacterContext.Provider
      value={{
        characters,
        slicedCharacters,
        filteredCharacters,
        search,
        setSearch,
        page,
        setPage,
        handleChangePage,
        openModal,
        closeModal,
        selectedCharacter,
        setSelectedCharacter,
        isModalOpen,
        setIsModalOpen,
        loading,
        error,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};

CharacterProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

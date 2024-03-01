import { useEffect, useState } from "react";
import { findAll } from "../services/charactersService";

export const useCharacters = () => {
    const { data, loading, error } = findAll();
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

  return {
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
    error
  }
}
import { useContext } from "react";
import { CharacterContext } from "../../context/CharacterContext";

export const SearchBar = () => {

    const { search, setSearch } = useContext(CharacterContext);
    return (
        <div className="search-bar container">
        <input
          className="search"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search your character by name..."
        />
      </div>
    );
}
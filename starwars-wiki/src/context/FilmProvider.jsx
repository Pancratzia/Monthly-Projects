import PropTypes from "prop-types";
import { useFilms } from "../hooks/useFilms";
import { FilmContext } from "./FilmContext";


export const FilmProvider = ({ children }) => {

    const { films, loading, error } = useFilms();

    return (
        <FilmContext.Provider value={{ films, loading, error }}>
            {children}
        </FilmContext.Provider>
    );
};


FilmProvider.propTypes = {
    children: PropTypes.node.isRequired,
}
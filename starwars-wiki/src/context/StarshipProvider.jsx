import PropTypes from "prop-types";
import { useStarships } from "../hooks/useStarships";
import { StarshipContext } from "./StarshipContext";


export const StarshipProvider = ({ children }) => {

    const { starships, loading, error } = useStarships();

    return (
        <StarshipContext.Provider value={{ starships, loading, error }}>
            {children}
        </StarshipContext.Provider>
    );
};


StarshipProvider.propTypes = {
    children: PropTypes.node.isRequired,
}
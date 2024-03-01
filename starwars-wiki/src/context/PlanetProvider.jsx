import PropTypes from "prop-types";
import { usePlanets } from "../hooks/usePlanets";
import { PlanetContext } from "./PlanetContext";

export const PlanetProvider = ({ children }) => {

    const { planets, loading, error } = usePlanets();

    return (
        <PlanetContext.Provider value={{ planets, loading, error }}>
            {children}
        </PlanetContext.Provider>
    );
};


PlanetProvider.propTypes = {
    children: PropTypes.node.isRequired,
}
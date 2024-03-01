import PropTypes from "prop-types";
import { usePlanets } from "../hooks/usePlanets";
import { PlanetsContext } from "./PlanetsContext";

export const PlanetsProvider = ({ children }) => {

    const { planets, loading, error } = usePlanets();

    return (
        <PlanetsContext.Provider value={{ planets, loading, error }}>
            {children}
        </PlanetsContext.Provider>
    );
};


PlanetsProvider.propTypes = {
    children: PropTypes.node.isRequired,
}
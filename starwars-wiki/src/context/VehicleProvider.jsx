import PropTypes from "prop-types";
import { useVehicles } from "../hooks/useVehicles";
import { VehicleContext } from "./VehicleContext";


export const VehicleProvider = ({ children }) => {

    const { vehicles, loading, error } = useVehicles();

    return (
        <VehicleContext.Provider value={{ vehicles, loading, error }}>
            {children}
        </VehicleContext.Provider>
    );
};


VehicleProvider.propTypes = {
    children: PropTypes.node.isRequired,
}
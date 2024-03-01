import { useEffect, useState } from "react";
import { findAll } from "../services/vehiclesService";

export const useVehicles = () =>{


    const { data, loading, error } = findAll();
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        if (data && data.results) {
          const newVehicles = data.results.map((newVehicle) => newVehicle.name);
          setVehicles((prevVehicles) => [...prevVehicles, ...newVehicles]);
        }
      }, [data]);

      return { vehicles, loading, error };

}
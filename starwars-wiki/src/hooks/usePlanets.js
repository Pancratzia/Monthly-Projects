import { useEffect, useState } from "react";
import { findAll } from "../services/planetsService";

export const usePlanets = () =>{


    const { data, loading, error } = findAll();
    const [planets, setPlanets] = useState([]);

    useEffect(() => {
        if (data && data.results) {
          const newPlanets = data.results.map((newPlanet) => newPlanet.name);
          setPlanets((prevPlanets) => [...prevPlanets, ...newPlanets]);
        }
      }, [data]);

      return { planets, loading, error };

}
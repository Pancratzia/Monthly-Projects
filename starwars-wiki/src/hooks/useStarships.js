import { useEffect, useState } from "react";
import { findAll } from "../services/StarshipsService";

export const useStarships = () =>{


    const { data, loading, error } = findAll();
    const [starships, setStarships] = useState([]);

    useEffect(() => {
        if (data && data.results) {
          const newStarships = data.results.map((newFilm) => newFilm.title);
          setStarships((prevStarships) => [...prevStarships, ...newStarships]);
        }
      }, [data]);

      return { starships, loading, error };

}
import { useEffect, useState } from "react";
import { findAll } from "../services/filmsService";

export const useFilms = () =>{


    const { data, loading, error } = findAll();
    const [films, setFilms] = useState([]);

    useEffect(() => {
        if (data && data.results) {
          const newFilms = data.results.map((newFilm) => newFilm.title);
          setFilms((prevFilms) => [...prevFilms, ...newFilms]);
        }
      }, [data]);

      return { films, loading, error };

}
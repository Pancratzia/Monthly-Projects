import { useFetch } from "../hooks/useFetch";
const BASE_URL = "https://swapi.dev/api/films/";

export const findAll = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, loading, error } = useFetch(`${BASE_URL}`);

  return { data, loading, error };
};

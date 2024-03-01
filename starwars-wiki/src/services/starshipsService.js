import { useFetch } from "../hooks/useFetch";
const BASE_URL = "https://swapi.dev/api/starships/";

export const findAll = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, loading, error } = useFetch(`${BASE_URL}`, true);

  return { data, loading, error };
};

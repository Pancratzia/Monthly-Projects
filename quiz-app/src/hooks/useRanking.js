import { useEffect, useState } from "react";
import { getRankData } from "../services/rankingService";


export const useRanking = () => {
  sessionStorage.clear();
  const [ranking, setRanking] = useState([]);

  const getRanking = async () => {
    return await getRankData();
  };

  useEffect(() => {
    getRanking().then((ranking) => {
      setRanking(ranking);
    });
  }, []);

  return { ranking };
};

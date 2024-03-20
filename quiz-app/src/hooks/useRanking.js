import { useEffect } from "react";
import { getRankData } from "../services/rankingService";
import { useDispatch, useSelector } from "react-redux";
import { SET_RANKING } from "../store/slices/ranking/rankingSlice";


export const useRanking = () => {
  sessionStorage.clear();

  const dispatch = useDispatch();
  const { ranking } = useSelector((state) => state.ranking);

  const getRanking = async () => {
    return await getRankData();
  };

  useEffect(() => {
    getRanking().then((rank) => {
      dispatch({ type: SET_RANKING.type, payload: rank });
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ranking };
};

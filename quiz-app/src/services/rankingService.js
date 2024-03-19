import { database } from "../firebase.js";

const getRankData = async () => {
  const rankingRef = database.collection("rank");
  const querySnapshot = await rankingRef
    .orderBy("puntaje", "desc")
    .limit(10)
    .get();

  const ranking = [];

  querySnapshot.forEach((doc) => {
    const data = doc.data();
    const user = {
      nombre: data.nombre,
      puntaje: data.puntaje,
    };

    ranking.push(user);
  });

  return ranking;
};

export { getRankData };

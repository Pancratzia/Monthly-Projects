import { useEffect, useState } from "react";
import { database } from "../firebase.js";

const RankingPage = () => {
  const [ranking, setRanking] = useState([]);

  const getRanking = async () => {
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

  useEffect(() => {
    getRanking().then((ranking) => {
      setRanking(ranking);
    });
  }, []);

  return (
    <div>
      <h1>Ranking</h1>

      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Puntaje</th>
          </tr>
        </thead>

        <tbody>
          {ranking.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.nombre}</td>
              <td>{user.puntaje}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RankingPage;

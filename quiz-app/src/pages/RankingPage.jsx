import { useEffect, useState } from "react";
import "../assets/styles/rankingPage.css";
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
    <div className="rankingPage container">
      <h1 className="title">Ranking</h1>

      <table className="table">
        <thead className="thead">
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Puntaje</th>
          </tr>
        </thead>

        <tbody className="tbody">
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

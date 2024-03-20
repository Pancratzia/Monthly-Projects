import { useRanking } from "../../hooks/useRanking"
import { useTranslation } from "react-i18next";

const Table = () => {
    const { ranking } = useRanking();
    const { t } = useTranslation("global");
  return (
    <table className="table">
        <thead className="thead">
          <tr>
            <th>#</th>
            <th>{t("RankingPage.fields.name")}</th>
            <th>{t("RankingPage.fields.score")}</th>
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
  )
}

export default Table
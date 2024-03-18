import { useRanking } from "../../hooks/useRanking"


const Table = () => {
    const { ranking } = useRanking()
  return (
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
  )
}

export default Table
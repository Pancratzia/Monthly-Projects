import PropTypes from 'prop-types'
const Cicles = ({actualCycle, totalCycles}) => {
  return (
    <p className="text-purple-950 text-xs">Ciclo {actualCycle}/{totalCycles}</p>
  )
}

export default Cicles;

Cicles.propTypes = {
  actualCycle: PropTypes.number.isRequired,
  totalCycles: PropTypes.number.isRequired
}
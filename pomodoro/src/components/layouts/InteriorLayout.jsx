import { PropTypes } from 'prop-types'

const InteriorLayout = ({ children }) => {
  return (
    <div className="flex flex-col justify-center items-center h-full gap-5 text-center">
      {children}
    </div>
  )
}

export default InteriorLayout;

InteriorLayout.propTypes = {
  children: PropTypes.node.isRequired
}
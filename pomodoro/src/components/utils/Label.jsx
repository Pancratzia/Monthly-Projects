import PropTypes from "prop-types";

const Label = ({ text }) => {
  return (
    <p>{text}</p>
  )
}

export default Label

Label.propTypes = {
  text: PropTypes.string.isRequired
}
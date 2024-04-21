import PropTypes from "prop-types";

const Button = ({ children, icon, onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      {icon}
      <span className="sr-only">{children}</span>
    </button>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  icon: PropTypes.node.isRequired,
};

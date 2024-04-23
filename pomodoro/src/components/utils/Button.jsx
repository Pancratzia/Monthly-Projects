import PropTypes from "prop-types";

const Button = ({ children, icon, onClick }) => {
  return (
    <button className="text-purple-950 drop-shadow-md shadow-purple-950" type="button" onClick={onClick}>
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

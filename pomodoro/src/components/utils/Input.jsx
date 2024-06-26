import PropTypes from "prop-types";

const Input = ({ placeholder, name, type = "text", required = false, id="" }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="w-full px-2 py-1 border border-purple-950 rounded-xl text-center  focus:outline-none text-purple-950 font-rubik"
      required={required}
      id={id}
    />
  );
};

export default Input;

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string,
  type: PropTypes.string,
  required: PropTypes.bool,
  id: PropTypes.string
};

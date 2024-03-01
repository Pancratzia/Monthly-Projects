import PropTypes from "prop-types";
export const Modal = ({ character, closeModal }) => {
    const {
      name,
      height,
      mass,
      hair_color,
      skin_color,
      eye_color,
      birth_year,
      gender,
    } = character;
    return (
      <div className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <button className="close" onClick={closeModal}>
              &times;
            </button>
          </div>
          <div className="modal-body">
            <h2 className="modal-title">{name}</h2>
            <h4 className="modal-subtitle">Birth Year: {birth_year}</h4>
  
            <ul className="modal-main-info">
              <li><span>Gender:</span> {gender.toUpperCase()}</li>
              <li><span>Height:</span> {height} cm</li>
              <li><span>Mass:</span> {mass} kg</li>
              <li><span>Hair Color:</span> {hair_color}</li>
              <li><span>Skin Color:</span> {skin_color}</li>
              <li><span>Eye Color:</span> {eye_color}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  };

  Modal.propTypes = {
    character: PropTypes.object,
    closeModal: PropTypes.func,
  };
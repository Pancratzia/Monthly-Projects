import propTypes from "prop-types";

export const Message = ({type, message}) =>{

    return(
        <p className={`alert ${type}`}>{message}</p>
    )
}

Message.propTypes = {
    type: propTypes.string.isRequired,
    message: propTypes.string.isRequired
}
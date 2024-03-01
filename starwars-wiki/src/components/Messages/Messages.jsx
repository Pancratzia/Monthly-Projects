import { useContext } from "react";
import { CharacterContext } from "../../context/CharacterContext";
import { Message } from "./Message";


export const Messages = () => {

    const {  error, loading } = useContext(CharacterContext);
    return(
        <div className="messages container">
        {error && <Message type="error" message={error} />}
        {loading && <Message type="loading" message="Loading..." />}
      </div>
    );
}
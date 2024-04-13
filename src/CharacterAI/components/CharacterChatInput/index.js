import { BsFillSendFill } from "react-icons/bs";
import "./styles.css";

const CharacterChatInput = ({
  onChange,
  inputMessage,
  onKeyDown,
  inputRef,
}) => {
  return (
    <div className="input-container">
      <input
        type="text"
        ref={inputRef}
        placeholder="Message test...."
        className="input-box"
        value={inputMessage}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <button type="button" className="send-btn">
        <BsFillSendFill />
      </button>
    </div>
  );
};

export default CharacterChatInput;

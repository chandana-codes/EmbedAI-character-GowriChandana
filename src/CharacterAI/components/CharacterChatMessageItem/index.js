import { format } from "date-fns";

import "./styles.css";

function CharacterChatMessageItem({ message, selectedCharacter }) {
  return (
    <div className="thread-message">
      <div className="message-details">
        <div className="sender-name-time-info">
          <h4 className="sender-name">{selectedCharacter.name}</h4>
          <span className="message-sent-at">
            {format(message.events.sentAt, "HH:mm")}
          </span>
        </div>
        <div className="message-content-container">
          <div className="message-content">{message.messageContent}</div>
        </div>
      </div>
    </div>
  );
}

export default CharacterChatMessageItem;

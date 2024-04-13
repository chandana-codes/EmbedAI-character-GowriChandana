import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router";
import { botMessages } from "../../constants/botMessages";
import CharacterChatMessageItem from "../../components/CharacterChatMessageItem";
import CharacterChatInput from "../../components/CharacterChatInput";
import useLocalStorage from "../../hooks/useLocalStorage";
import "./styles.css";

// copied from https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pickRandomMessages() {
  const randomIndex = getRandomInt(0, botMessages.length - 1);
  return botMessages[randomIndex] ?? botMessages[0];
}

function createNewMessage(messageContent) {
  return {
    threadId: "1",
    messageId: Date.now(),
    events: {
      sentAt: new Date(),
    },
    userMessage: messageContent,
    botMessage: pickRandomMessages(),
  };
}

function ChatThreadContianer() {
  const { id } = useParams();
  console.log("id", id);
  const [characters] = useLocalStorage("characters");
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    const selectedChar = characters.find((c) => Number(c.id) === Number(id));
    setSelectedCharacter(selectedChar);
  }, [id, characters]);

  const onNewMessage = (newMessage) => {
    const updatedMessagesList = [...messages, newMessage];
    setMessages(updatedMessagesList);
    inputRef.current.focus();
  };

  const onInputChange = (e) => {
    setInputMessage(e.target.value);
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      const validatedInputMessage = inputMessage.trim();
      if (validatedInputMessage.length > 0) {
        const newMessage = createNewMessage(inputMessage);
        console.log("newMessage", newMessage);
        onNewMessage(newMessage);
        setInputMessage("");
      }
    }
  };

  return (
    <div className="chat-container">
      <div>
        {selectedCharacter ? (
          <div>
            <h2>{selectedCharacter.name}</h2>
            <p>{selectedCharacter.greeting}</p>
          </div>
        ) : (
          <p>Character not found</p>
        )}
        <div className="chat-message-container">
          {messages.map((message) => (
            <CharacterChatMessageItem
              selectedCharacter={selectedCharacter}
              message={message}
            />
          ))}
        </div>
        <CharacterChatInput
          inputRef={inputRef}
          onChange={onInputChange}
          inputMessage={inputMessage}
          onKeyDown={onKeyDown}
        />
      </div>
    </div>
  );
}

export default ChatThreadContianer;

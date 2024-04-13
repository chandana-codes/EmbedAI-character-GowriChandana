import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const CreateCharacterForm = ({ onCreate }) => {
  const [characterName, setCharacterName] = useState("");
  const [tagLine, setTagLine] = useState("");
  const [description, setDescription] = useState("");
  const [greeting, setGreeting] = useState("");
  const navigate = useNavigate();

  const createCharacterSubmit = (e) => {
    e.preventDefault();
    const createNewCharacter = {
      id: Date.now(),
      name: characterName,
      tagLine: tagLine,
      description: description,
      greeting: greeting,
    };
    onCreate(createNewCharacter);
    navigate(`/chat/${createNewCharacter.id}`);
  };

  return (
    <div className="create-character-container">
      <h1>Create character</h1>
      <form className="create-character-form" onSubmit={createCharacterSubmit}>
        <label>Character name</label>
        <input
          className="character-input"
          placeholder="e.g Albert Einstein"
          type="text"
          value={characterName}
          onChange={(e) => setCharacterName(e.target.value)}
          required
        />
        <label>Tagline</label>
        <input
          className="character-input"
          type="text"
          placeholder="Add a short tagline of your character"
          value={tagLine}
          onChange={(e) => setTagLine(e.target.value)}
          required
        />
        <label>Description</label>
        <input
          type="text"
          placeholder="How would your Character describe themselves?"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="character-input"
        />
        <label>Greeting</label>
        <input
          type="text"
          placeholder="e.g Hello, I am Albert. Ask me anything about my scientific contributions."
          value={greeting}
          onChange={(e) => setGreeting(e.target.value)}
          required
          className="character-input"
        />
        <button type="submit">Create Character</button>
      </form>
    </div>
  );
};

export default CreateCharacterForm;

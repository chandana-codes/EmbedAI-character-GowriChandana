import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./routes/HomePage";
import CreateCharacter from "./routes/CreateCharacter";
import CharacterChatThread from "./routes/CharacterChatThread";
import SideBar from "./components/SideBar";
import useLocalStorage from "./hooks/useLocalStorage";
import "./styles.css";

const CharacterAI = () => {
  const [characters, setCharacters] = useLocalStorage("characters", []);

  const onCreateCharacter = (createNewCharacter) => {
    const updatedCharacters = [...characters, createNewCharacter];
    setCharacters(updatedCharacters);
    console.log("updatedCharacters", updatedCharacters, createNewCharacter);
  };

  return (
    <BrowserRouter>
      <div className="app-layout">
        <SideBar characters={characters} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              exact
              path="/create-character"
              element={<CreateCharacter onCreate={onCreateCharacter} />}
            />
            <Route path="/chat/:id" element={<CharacterChatThread />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default CharacterAI;

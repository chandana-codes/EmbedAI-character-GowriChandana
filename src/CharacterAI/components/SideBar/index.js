import { useNavigate } from "react-router-dom";
import "./styles.css";

const SideBar = ({ characters }) => {
  const navigate = useNavigate();

  const openForm = (e) => {
    e.preventDefault();
    navigate("/create-character");
  };

  console.log("characters", characters);

  return (
    <div className="side-bar-container">
      <h1>character.ai</h1>
      <button type="button" className="create-btn" onClick={openForm}>
        {" "}
        <span className="plus-create-btn">+ </span>Create
      </button>
      <br />
      <button type="button" className="discover-btn">
        Discover
      </button>

      <hr />
      <h3>Chats</h3>
      {characters.map((character) => {
        return (
          <div
            className="chat-thread"
            key={character.id}
            onClick={() => navigate(`/chat/${character.id}`)}
          >
            {character.name}
          </div>
        );
      })}
    </div>
  );
};

export default SideBar;

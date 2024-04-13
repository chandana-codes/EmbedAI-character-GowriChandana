import { FaSearch } from "react-icons/fa";
import "./styles.css";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <div>
        <h2>Welcom back</h2>
      </div>
      <div className="search-container">
        <FaSearch />
        <input
          type="search"
          placeholder="Search for Characters"
          className="search-box"
        />
      </div>
    </div>
  );
};

export default NavBar;

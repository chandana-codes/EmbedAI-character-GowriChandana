import NavBar from "../../components/NavBar";
import "./styles.css";

function HomePage() {
  return (
    <div className="home-page-container">
      <NavBar />
      <h3 className="home-page-heading">Try these</h3>
      <ul className="try-these-list">
        <li className="try-these-card">
          <h3>Practice a new language</h3>
          <p>with HyperGlot</p>
        </li>
        <li className="try-these-card">
          <h3>Practice interviewing</h3>
          <p>with HyperGlot</p>
        </li>
        <li className="try-these-card">
          <h3>Plan a trip</h3>
          <p>with HyperGlot</p>
        </li>
        <li className="try-these-card">
          <h3>Play a game</h3>
          <p>with HyperGlot</p>
        </li>
        <li className="try-these-card">
          <h3>Write a story</h3>
          <p>with HyperGlot</p>
        </li>
        <li className="try-these-card">
          <h3>Help me make a decision</h3>
          <p>with HyperGlot</p>
        </li>
        <li className="try-these-card">
          <h3>Get book recommendations</h3>
          <p>with HyperGlot</p>
        </li>
        <li className="try-these-card">
          <h3>Brainstrom ideas</h3>
          <p>with HyperGlot</p>
        </li>
        <li className="try-these-card">
          <h3>Plan a trip</h3>
          <p>with HyperGlot</p>
        </li>
        <li className="try-these-card">
          <h3>Get Advice</h3>
          <p>with HyperGlot</p>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;

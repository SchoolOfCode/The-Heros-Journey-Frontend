import Header from "../Header";
import { Link } from "react-router-dom";
import "./style.css";

// Stage 5 - Mission complete - Launch into the real world - Light speed into another galaxy - Motivational quotes fetched from an API of past bootcampers

function Stage5() {
  return (
    <div
      className="stage"
      style={{
        backgroundImage: `url("https://i.imgur.com/0u8nK7w.png")`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center`,
        backgroundSize: `100vh`,
      }}
    >
      <Header text="Mission Complete!" />
      <Link className="play-again-link" to="/">
        Play Again?
      </Link>
    </div>
  );
}

export default Stage5;

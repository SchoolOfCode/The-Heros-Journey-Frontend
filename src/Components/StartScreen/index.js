import StartHeading from "./StartHeading";
import { Link } from "react-router-dom";
import "./style.css";

function StartScreen() {
  return (
    <div
      className="stage"
      style={{
        backgroundImage: `url("https://i.imgur.com/j5eO6bQ.png")`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `100vh`,
        backgroundPosition: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "fixed",
          bottom: "20vh",
          alignItems: "center",
        }}
      >
      <StartHeading text="The Hero's Journey" />
        <Link
          to="/about"
          className="menuLink"
        >
          BEGIN
        </Link>
        <Link
          to="/how-to-play"
          className="menuLink"
        >
          HOW TO PLAY
        </Link>
      </div>
    </div>
  );
}

export default StartScreen;

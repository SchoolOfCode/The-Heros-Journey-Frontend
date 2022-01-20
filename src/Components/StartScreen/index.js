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
      <StartHeading text="The Hero's Journey" />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "fixed",
          bottom: "20vh",
          alignItems: "center",
        }}
      >
        <Link
          to="/start-of-the-journey"
          className="menuLink"
          style={{ color: "black", backgroundColor: "#00ffc2" }}
        >
          BEGIN
        </Link>
        <Link
          to="/how-to-play"
          className="menuLink"
          style={{ color: "black", backgroundColor: "#00ffc2", width: "150px" }}
        >
          HOW TO PLAY
        </Link>
      </div>
    </div>
  );
}

export default StartScreen;

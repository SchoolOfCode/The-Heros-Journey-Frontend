import StartHeading from "../StartHeading";
import { Link } from "react-router-dom";
import "../style.css";

function HowToPlay() {
  return (
    <div
      className="stage"
      style={{
        backgroundImage: `url("https://i.imgur.com/pwph771.png")`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `100vh`,
        backgroundPosition: "center",
      }}
    >
      <StartHeading
        text="How To Play"
        style={{ fontSize: "10vh", position: "fixed", top: "10vh" }}
      />
      <p style={{ color: "white" }}>
        Click around the page to gather hints of the password.
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "fixed",
          bottom: "20vh",
        }}
      >
        <Link
          to="/"
          className="go-link"
          style={{ color: "black", width: "150px", textDecoration: "none" }}
        >
          GO BACK
        </Link>
      </div>
    </div>
  );
}

export default HowToPlay;

import { Link } from "react-router-dom";

// Stage 1 - Application Stage - Main Menu of game - Typing name, (Saving state), List Info about school of code - Coding experience? Employment Statistics?

import InputBox from "../InputBox";
import Text from "../Text";
import StartHeading from "../../Components/StartScreen/StartHeading";
import "./style.css";

function Stage1() {
  return (
    <div
      className="stage"
      style={{
        backgroundImage: `url("https://i.imgur.com/j5eO6bQ.png")`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `100vh`,
        backgroundPosition: "center",
        display: `flex`,
        flexDirection: `column`
      }}
    >
      <StartHeading
        text="About"
        style={{ fontSize: "10vh", position: "fixed", top: "10vh" }}
      />
      <p
        style={{
          color: "white",
          position: "fixed",
          top: "30vh",
          fontSize: "2.7vh",
        }}
      >
        This game represents the School of Code journey. You'll go through the
        stages solving coding challanges. Each level respresents a different
        stage of your coding journey! 

        Please enter a team name and a quote that
        motivates you.
      </p>
      <InputBox 
          placeholder="Team Name" 
          style={{ position: `fixed`,
          bottom: `25vh`}}
          />
        <InputBox placeholder="Quote" 
          style={{ position: `fixed`,
          bottom: `30vh`}}
        />
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
          to="/stage2"
          className="go-link"
        >
          GO!
        </Link>
      </div>
    </div>
  );
}

export default Stage1;

import { Link } from "react-router-dom";
import { useState } from "react";

// Stage 1 - Application Stage - Main Menu of game - Typing name, (Saving state), List Info about school of code - Coding experience? Employment Statistics?

import Input from "../Input";
import StartHeading from "../../Components/StartScreen/StartHeading";
import "./style.css";

const API_URL = process.env.REACT_APP_API_URL;

function Stage1() {
  const [name, setName] = useState("");
  const [quote, setQuote] = useState("");
  let newQuote = { name: name, quote: quote };

  function handleSubmit() {
    fetch(`${API_URL}quotes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newQuote),
    });
  }

  function handleName(e) {
    setName(e.target.value);
  }

  function handleQuote(e) {
    setQuote(e.target.value);
  }

  return (
    <div
      className="stage"
      style={{
        backgroundImage: `url("https://i.imgur.com/j5eO6bQ.png")`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `100vh`,
        backgroundPosition: "center",
        display: `flex`,
        flexDirection: `column`,
      }}
    >
     <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            bottom: "17vh",
            alignItems: "center",
          }}
        >
      <StartHeading
        text="About"
        style={{ 
          position: "fixed", 
          top: "15vh" }}
      />
      <p
        style={{
          color: "white",
          position: "fixed",
          top: "35vh",
        }}
      >
        This game represents the School of Code journey. 
        
        You'll go through the stages of solving coding challenges. Each level represents a different stage of your coding journey! 
        
        Please enter a team name and words that motivates you!

      </p>
      <form onSubmit={handleSubmit} action={`${API_URL}quotes`} method="post">
        <Input
          handleChange={handleName}
          name="name"
          placeholder="Team Name"
          style={{
            position: "fixed",
            bottom: "32vh",
            height: "4vh",
          }}
        />
        <Input
          handleChange={handleQuote}
          name="quote"
          placeholder="Quote"
          style={{
            position: "fixed",
            bottom: "25vh",
            height: "4vh",
          }}
        />

          <Link
            onClick={handleSubmit}
            to="/start-of-the-journey"
            className="go-link"
          >
            Go!
          </Link>
      </form>
    </div>
    </div>
  );
}

export default Stage1;

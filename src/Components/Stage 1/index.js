import { Link } from "react-router-dom";
import { useState } from "react";

// Stage 1 - Application Stage - Main Menu of game - Typing name, (Saving state), List Info about school of code - Coding experience? Employment Statistics?

import InputBox from "../InputBox";
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
      <StartHeading
        text="About"
        style={{ fontSize: "10vh", position: "fixed", top: "15vh" }}
      />
      <p
        style={{
          color: "white",
          position: "fixed",
          top: "33vh",
        }}
      >
        This game represents the School of Code journey. 
        
        You'll go through the stages of solving coding challenges. Each level represents a different stage of your coding journey! 
        
        Please enter a team name and words that motivates you!

      </p>
      <form onSubmit={handleSubmit} action={`${API_URL}quotes`} method="post">
        <InputBox
          handleChange={handleName}
          name="name"
          placeholder="Team Name"
          style={{
            position: "fixed",
            bottom: "30vh",
            backgroundColor: `white`,
            textAlign: `center`,
            boxShadow: `2px 2px 4px rgba(47, 47, 47, 0.29)`,
            borderRadius: `30px`,
            borderStyle: `none`,
            margin: `20px`,
            padding: `12px 50px`,
            fontSize: `20px`,
          }}
        />
        <InputBox
          handleChange={handleQuote}
          name="quote"
          placeholder="Quote"
          style={{
            position: "fixed",
            bottom: "23vh",
            backgroundColor: `white`,
            textAlign: `center`,
            boxShadow: `2px 2px 4px rgba(47, 47, 47, 0.29)`,
            borderRadius: `30px`,
            borderStyle: `none`,
            margin: `20px`,
            padding: `12px 50px`,
            fontSize: `20px`,
          }}
        />
        {/* <div style={{ position: 'fixed', left: '10' }}></div> */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            bottom: "18vh",
            alignItems: "center",
          }}
        >
          <Link onClick={handleSubmit} to="/" className="go-link">
            Go!
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Stage1;

import Header from "../Header";
import { Link } from "react-router-dom";
import "./style.css";
import { useState, useEffect } from "react";

const API_URL = process.env.REACT_APP_API_URL;

// Stage 5 - Mission complete - Launch into the real world - Light speed into another galaxy - Motivational quotes fetched from an API of past bootcampers

function Stage5() {
  const [quote, setQuote] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    async function getQuotes() {
      const response = await fetch(`${API_URL}quotes`);
      const data = await response.json();
      setName(data.payload[data.payload.length - 1].name);
      setQuote(data.payload[data.payload.length - 1].quote);
    }
    getQuotes();
  }, []);

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
    <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
  }}>
      <Header text="Mission Complete!" 
        style={{ 
          position: "fixed", 
          top: "15vh"
           }}
      />
      <div className="end-page">

      <p className="team-input">
        Congratulations, {name}!</p>

        <p 
          style={{
          fontSize: "1.5vh",
        }} > 
        You have made it to the end!
      </p>

      <p
          style={{
          fontSize: "1.5vh",
        }}>
        Remember these words you told yourself at the beginning:</p>
        
      <p className="team-input">{quote}</p>

      <p  
          style={{
          fontSize: "1.5vh",
        }}>
        You should be proud of how far you’ve come, and it can only go upwards
        from here on out!
      </p>
      </div>

      <Link className="play-again-link" to="/">
        Play Again, {name}?
      </Link>
      </div>
    </div>
  );
}

export default Stage5;

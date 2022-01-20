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
      <Header text="Mission Complete!" />
      <p className="end-page">
        Congratulations {name}, you have made it to the end!
      </p>

      <p className="end-page">
        Remember these words you told yourself at the beginning: {quote}
      </p>

      <p className="end-page">
        You should be proud of how far you’ve come, and it can only go upwards
        from here on out!
      </p>

      <Link className="play-again-link" to="/">
        Play Again {name}?
      </Link>
    </div>
  );
}

export default Stage5;

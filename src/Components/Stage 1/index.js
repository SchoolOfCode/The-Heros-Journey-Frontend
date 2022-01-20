import { Link } from 'react-router-dom';
import { useState } from 'react';

// Stage 1 - Application Stage - Main Menu of game - Typing name, (Saving state), List Info about school of code - Coding experience? Employment Statistics?

import Input from '../Input';
import StartHeading from '../../Components/StartScreen/StartHeading';
import './style.css';

const API_URL = process.env.REACT_APP_API_URL;

function Stage1() {
  const [name, setName] = useState('');
  const [quote, setQuote] = useState('');
  const [date, setDate] = useState('');

  let newQuote = { name: name, quote: quote };
  let newDate = { name: name, date: date };

  let today = new Date();
  let todayDate =
    today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  let time =
    today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
  let dateTime = `${todayDate} ${time}`;

  function handleSubmit() {
    fetch(`${API_URL}quotes`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newQuote),
    });
    fetch(`${API_URL}dates`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newDate),
    });
  }

  function handleName(e) {
    setName(e.target.value);
    setDate(dateTime);
  }

  function handleQuote(e) {
    setQuote(e.target.value);
    setDate(dateTime);
  }

  return (
    <div
      className="stage"
      style={{
        backgroundImage: `url("https://i.imgur.com/j5eO6bQ.png")`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `100vh`,
        backgroundPosition: 'center',
        display: `flex`,
        flexDirection: `column`,
      }}
    >
      <StartHeading
        text="About"
        style={{ fontSize: '10vh', position: 'fixed', top: '15vh' }}
      />
      <p
        style={{
          color: 'white',
          position: 'fixed',
          top: '35vh',
        }}
      >
        This game represents the School of Code journey. You'll go through the
        stages of solving coding challenges. Each level represents a different
        stage of your coding journey! Please enter a team name and words that
        motivates you!
      </p>
      <form onSubmit={handleSubmit} action={`${API_URL}quotes`} method="post">
        <Input
          handleChange={handleName}
          name="name"
          placeholder="Team Name"
          style={{
            position: 'fixed',
            bottom: '32vh',
          }}
        />
        <Input
          handleChange={handleQuote}
          name="quote"
          placeholder="Quote"
          style={{
            position: 'fixed',
            bottom: '27vh',
          }}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            position: 'fixed',
            bottom: '18vh',
            alignItems: 'center',
          }}
        >
          <Link
            onClick={handleSubmit}
            to="/start-of-the-journey"
            className="go-link"
          >
            Go!
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Stage1;

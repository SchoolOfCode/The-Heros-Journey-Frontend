import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import Click from '../Click';
import Input from '../Input';
import Padlock from '../Padlock';
import SideNav from '../Sidenav';
import clickInfo from './clickInfo';

const API_URL = process.env.REACT_APP_API_URL;
// Stage 4 - Heroes journey - transformative - Floating in space Weeks 7-8 React

function Stage4() {
  const [password, setPassword] = useState('');
  const [passwords, setPasswords] = useState([]);

  const [link, setLink] = useState('/transformation');

  useEffect(() => {
    async function getPasswords() {
      const response = await fetch(`${API_URL}passwords`);
      const data = await response.json();
      setPasswords(data.payload);
    }
    getPasswords();
  }, []);

  useEffect(() => {
    console.log(
      'I wonder what happens if I click around a bit and USE some of these objects...'
    );
  }, []);

  function handleChange(e) {
    setPassword(e.target.value);
    if (e.target.value.toLowerCase() === passwords[3].password) {
      setLink('/mission-complete');
    } else {
      setLink('/transformation');
    }
  }

  function submit() {
    if (password.toLowerCase() !== passwords[3].password) {
      return alert('Access Denied');
    } else {
      alert('Permission granted');
    }
  }

  return (
    <div
      className="stage"
      style={{
        backgroundImage: `url("https://i.imgur.com/nBxe5cs.png")`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center`,
        backgroundSize: `100vh`,
      }}
    >
      <SideNav
        title="Passing the threshold..."
        description="From this point on, there’s no turning back. You have overcome obstacles and you’re committed to the journey. This has required accepting your fears and understanding the value of connecting with others to support you on your journey."
        stageDesc="React: React router, Hooks, JSX.
        The power of reusability."
      />

      <p style={{ 
        position: "fixed", 
        bottom: "3vh", 
        right: "10vh" }}>
        Hint: Console
      </p>

      {/* map through items on clickInfo array to get styling, text and function to be called on each button */}
      {clickInfo.map((item) => {
        return (
          <Click
            text={item.text}
            handleClick={item.handleClick}
            style={item.style}
            key={item.key}
          />
        );
      })}

      <Input
        placeholder="Password"
        handleChange={handleChange}
        style={{ position: 'fixed', bottom: '8vh', right: '15vh' }}
      />
      <Link onClick={submit} to={link}>
        <Padlock />
      </Link>
    </div>
  );
}

export default Stage4;

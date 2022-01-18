import { Link } from 'react-router-dom';
import Click from '../Click';
import styled from 'styled-components';
import Input from '../Input';
import Button from '../Button';
import Header from '../Header';
import { useState, useEffect } from 'react';

// Stage 4 - Heroes journey - transformative - Floating in space Weeks 7-8 React

function Stage4() {
  const [password, setPassword] = useState('');

  const [link, setLink] = useState('/stage4');

  useEffect(() => {
    console.log(
      'I wonder what happens if I click around a bit and USE some of these objects...'
    );
  }, []);

  function handleChange(e) {
    setPassword(e.target.value);
    if (e.target.value.toLowerCase() === 'hooks') {
      setLink('/stage5');
    } else {
      setLink('/stage4');
    }
  }

  //Work out functionality so that a user doesn't have to click twice to progress to the next stage

  function submit() {
    if (password.toLowerCase() !== 'hooks') {
      return alert('Access Denied');
    } else {
      alert('Permission granted');
    }
  }

  function handleClick(text) {
    switch (text) {
      case '1':
        console.log('useBox');
        break;
      case '2':
        console.log('useCamera');
        break;
      case '3':
        console.log('useChair');
        break;
      case '4':
        console.log('useWindow');
    }
  }

  return (
    <div
      className="stage"
      style={{
        backgroundImage: `url("https://media.istockphoto.com/vectors/chairs-at-shuttle-window-with-view-of-other-planets-vector-id1361190746?k=20&m=1361190746&s=612x612&w=0&h=JKwkb_BRgNsIj95yY4xjOInH73vGtNF-PAs6KwYIuYs=")`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `100vw 100vh`,
      }}
    >
      <Header text="React Room" />
      <p>Hint: Console</p>
      <Input
        placeholder="Enter Password"
        handleChange={handleChange}
        style={{ position: 'fixed', bottom: '35vh', right: '7vw', opacity: 1 }}
      />
      <Link
        onClick={submit}
        to={link}
        style={{ position: 'fixed', bottom: '30vh', right: '10vw', opacity: 1 }}
      >
        Open Door
      </Link>
      <Click
        text="1"
        handleClick={handleClick}
        style={{ position: 'fixed', bottom: '43vh', left: '7vw', opacity: 0 }}
      />
      <Click
        text="2"
        handleClick={handleClick}
        style={{ position: 'fixed', top: '23vh', right: '24vw', opacity: 0 }}
      />
      <Click
        text="3"
        handleClick={handleClick}
        style={{ position: 'fixed', bottom: '38vh', right: '32vw', opacity: 0 }}
      />
      <Click
        text="4"
        handleClick={handleClick}
        style={{ position: 'fixed', top: '47vh', right: '49vw', opacity: 0 }}
      />
    </div>
  );
}

export default Stage4;

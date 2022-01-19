import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Click from '../Click';
import Input from '../Input';
import Sidebar from '../Sidebar';
import Padlock from '../Padlock';

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
      default:
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
      <Sidebar title="Crossing the threshold..." description="
      X" stageDesc="React"/>
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

      <Input
        placeholder="Password"
        handleChange={handleChange}
        style={{ position: 'fixed', bottom: '8vh', right: '15vh'}}
      />
      <Link
        onClick={submit}
        to={link}
      >
        <Padlock />
      </Link>
      <p
        style={{ position: 'fixed', bottom: '10vh', right: '20vh'}}>Hint: Console</p>
    </div>
  );
}

export default Stage4;

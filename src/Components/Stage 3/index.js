import { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../Input';
import Header from '../Header';
import Text from '../Text';
// Stage 3 - Imposter Syndrome stage - Hole in the ship Weeks 4-5 Backend Node, SQL
// stage 3

function Stage3() {
  const [password, setPassword] = useState('');

  const [link, setLink] = useState('/stage3');

  function handleChange(e) {
    setPassword(e.target.value);
    if (e.target.value === 'VALUES') {
      setLink('/stage4');
    } else {
      setLink('/stage3');
    }
  }

  function submit() {
    if (password !== 'VALUES') {
      return alert('Access Denied');
    } else {
      alert('Permission granted');
    }
  }

  return (
    <div
      className="stage"
      style={{
        backgroundImage: `url("https://i.imgur.com/P04KXRQ.png")`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center`,
        backgroundSize: `100vh`,
      }}
    >
      <Header text="Hole in the spaceship" />
      <Input placeholder="Password" handleChange={handleChange} />
      <Link onClick={submit} to={link}>
        Open
      </Link>
      <Text
        text="INSERT INTO spaceship"
        style={{
          position: 'fixed',
          bottom: '45vh',
          left: '29.5vw',
          opacity: 1,
          fontSize: '1.3vh',
          fontWeight: 'bold',
          color: 'white',
        }}
      />
      <Text
        text="(SQL)"
        style={{
          position: 'fixed',
          bottom: '43vh',
          left: '32.5vw',
          opacity: 1,
          fontSize: '1.3vh',
          fontWeight: 'bold',
          color: 'white',
        }}
      />
      <Text
        text="($1, $2) RETURNING"
        style={{
          position: 'fixed',
          bottom: '45vh',
          right: '30vw',
          opacity: 1,
          fontSize: '1.3vh',
          fontWeight: 'bold',
          color: 'white',
        }}
      />
      <Text
        text="password"
        style={{
          position: 'fixed',
          bottom: '43vh',
          right: '32vw',
          opacity: 1,
          fontSize: '1.3vh',
          fontWeight: 'bold',
          color: 'white',
        }}
      />
    </div>
  );
}

export default Stage3;

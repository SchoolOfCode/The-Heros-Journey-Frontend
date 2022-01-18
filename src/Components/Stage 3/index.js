import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Input from '../Input';
import Header from '../Header';

// Stage 3 - Imposter Syndrome stage - Hole in the ship Weeks 4-5 Backend Node, SQL

function Stage3() {
  const [password, setPassword] = useState('');

  const [link, setLink] = useState('/stage3');

  function handleChange(e) {
    setPassword(e.target.value);
    if (e.target.value.toLowerCase() === 'SQL') {
      setLink('/stage4');
    } else {
      setLink('/stage3');
    }
  }

  function submit() {
    if (password.toLowerCase() !== 'SQL') {
      return alert('Access Denied');
    } else {
      alert('Permission granted');
    }
  }

  return (
    <div
      className="stage"
      style={{
        backgroundImage: `url("https://media.istockphoto.com/vectors/spaceship-cockpit-interior-space-and-planets-view-vector-id1208978034?k=20&m=1208978034&s=612x612&w=0&h=dAOScftuKesONgfb2q4equDR__kTe-UsIk_OmCcvMQk=")`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `100vw 100vh`,
      }}
    >
      <Header text="Hole in the spaceship" />
      <Input placeholder="Enter Password" handleChange={handleChange} />
      <Link onClick={submit} to={link}>
        Open
      </Link>
    </div>
  );
}

export default Stage3;

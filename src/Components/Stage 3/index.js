import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Input from '../Input';
import Text from '../Text';
import Padlock from '../Padlock';
import SideNav from '../Sidenav';
import Alert from '../Alert';

const API_URL = process.env.REACT_APP_API_URL;

// Stage 3 - Imposter Syndrome stage - Hole in the ship Weeks 4-5 Backend Node, SQL

function Stage3() {
  const [password, setPassword] = useState('');
  const [link, setLink] = useState('/imposter-syndrome');
  const [passwords, setPasswords] = useState([]);

  const [alert1, setAlert1] = useState(true);
  const [alert2, setAlert2] = useState(true);
  const [alert3, setAlert3] = useState(true);
  const [alert4, setAlert4] = useState(true);
  const [alert5, setAlert5] = useState(true);
  const [alert6, setAlert6] = useState(true);

  const toggleAlert1 = () => {
    setAlert1(!alert1);
  };

  const toggleAlert2 = () => {
    setAlert2(!alert2);
  };

  const toggleAlert3 = () => {
    setAlert3(!alert3);
  };

  const toggleAlert4 = () => {
    setAlert4(!alert4);
  };

  const toggleAlert5 = () => {
    setAlert5(!alert5);
  };

  const toggleAlert6 = () => {
    setAlert6(!alert6);
  };

  useEffect(() => {
    async function getPasswords() {
      const response = await fetch(`${API_URL}passwords`);
      const data = await response.json();
      setPasswords(data.payload);
    }
    getPasswords();
  }, []);

  function handleChange(e) {
    setPassword(e.target.value);
    if (e.target.value === passwords[2].password) {
      setLink('/transformation');
    } else {
      setLink('/imposter-syndrome');
    }
  }

  function submit() {
    if (password !== passwords[2].password) {
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
      <SideNav
        title="Houston, we have a problem!"
        description="Getting out of your comfort zone and jumping straight into the unknown is an overwhelming feeling.
      'What am I doing here?' is a question you may ask yourself as you begin to self-doubt and be filled with intrusive thoughts..."
        stageDesc="Back-end: API, SQL, Databases. 
        Providing the server with information to make our code more dynamic."
      />

      {/* ALERTS */}
      {alert1 && (
        <Alert
          style={{ position: `fixed`, bottom: `30vh`, left: `30vh` }}
          content={<>IMPOSTER!</>}
          handleClose={toggleAlert1}
        />
      )}

      {alert2 && (
        <Alert
          style={{ position: `fixed`, bottom: `80vh`, right: `40vh` }}
          content={<>I'M AN IMPOSTER!</>}
          handleClose={toggleAlert2}
        />
      )}

      {alert3 && (
        <Alert
          style={{ position: `fixed`, bottom: `20vh`, right: `45vh` }}
          content={<>YOU'RE AN IMPOSTER!</>}
          handleClose={toggleAlert3}
        />
      )}

      {alert4 && (
        <Alert
          style={{ position: `fixed`, top: `20vh`, left: `20vh` }}
          content={<>HELP!</>}
          handleClose={toggleAlert4}
        />
      )}

      {alert5 && (
        <Alert
          style={{ position: `fixed`, top: `45vh`, left: `80vh` }}
          content={<>WE ARE IMPOSTERS!</>}
          handleClose={toggleAlert5}
        />
      )}

      {alert6 && (
        <Alert
          style={{ position: `fixed`, top: `30vh`, left: `50vh` }}
          content={<>AM I AN IMPOSTER?</>}
          handleClose={toggleAlert6}
        />
      )}

      {/* HINTS */}
      <Text
        text="INSERT INTO spaceship"
        style={{
          position: 'fixed',
          top: '25vh',
          opacity: 1,
          width: '43vh',
          fontSize: '2vh',
          fontWeight: 'bold',
          color: 'white',
        }}
      />
      <Text
        text="(SQL)"
        style={{
          position: 'fixed',
          opacity: 1,
          fontSize: '2vh',
          fontWeight: 'bold',
          color: 'white',
        }}
      />
      <Text
        text="($1, $2) RETURNING"
        style={{
          position: 'fixed',
          bottom: '25vh',
          opacity: 1,
          fontSize: '2vh',
          fontWeight: 'bold',
          color: 'white',
        }}
      />
      <Text
        text="password"
        style={{
          position: 'fixed',
          bottom: '23vh',
          opacity: 1,
          fontSize: '2vh',
          fontWeight: 'bold',
          color: 'white',
        }}
      />
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

export default Stage3;

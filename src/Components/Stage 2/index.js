import { Link } from 'react-router-dom';

import Input from '../Input';
import Popup from '../Popup';
import Padlock from '../Padlock';
import Sidebar from '../Sidebar';
import { useState } from 'react';
import './style.css';

// Stage 2 - Start of the journey - Excited - Space Bedroom - Weeks 1-3 Vanilla JS

function Stage2() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [password, setPassword] = useState('');
  const [link, setLink] = useState('/stage2');

  function handleChange(e) {
    setPassword(e.target.value);
    if (e.target.value.toLowerCase() === 'variables') {
      setLink('/stage3');
    } else {
      setLink('/stage2');
    }
  }

  function submit() {
    if (password.toLowerCase() !== 'variables') {
      return alert('Access Denied');
    } else {
      alert('Permission granted');
    }
  }

  // Each pop-up will have to have their own state/function or else they all of them will open at the same time.

  const togglePopup1 = () => {
    setIsOpen1(!isOpen1);
  };

  const togglePopup2 = () => {
    setIsOpen2(!isOpen2);
  };

  const togglePopup3 = () => {
    setIsOpen3(!isOpen3);
  };

  return (
    <div
      className="stage"
      style={{
        backgroundImage: `url("https://i.imgur.com/6BnAjur.png")`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center`,
        backgroundSize: `100vh`,
      }}
    >
      <Sidebar title='Start of the Journey' description='Eyes full of wonder' />

      <h1>Stage 2</h1>
      <Input placeholder="Password" handleChange={handleChange} />
      <Link onClick={submit} to={link}>
        Enter
      </Link>

      {/* Pop-up 1 */}
      <input
        type="button"
        value=""
        onClick={togglePopup1}
        style={{ position: 'fixed', bottom: '7vh', left: '49vw', opacity: 3 }}
      />
      {isOpen1 && (
        <Popup
          content={
            <>
              <b>let</b>
              {/* <p>Hint 1</p> */}
            </>
          }
          handleClose={togglePopup1}
        />
      )}

      {/* Pop-up 2 */}
      <input
        type="button"
        value=""
        onClick={togglePopup2}
        style={{ position: 'fixed', bottom: '63vh', left: '15vw', opacity: 3 }}
      />
      {isOpen2 && (
        <Popup
          content={
            <>
              <b>var</b>
            </>
          }
          handleClose={togglePopup2}
        />
      )}

      {/* Pop-up 3 */}
      <input
        type="button"
        value=""
        onClick={togglePopup3}
        style={{ position: 'fixed', bottom: '63vh', right: '15vw', opacity: 3 }}
      />
      {isOpen3 && (
        <Popup
          content={
            <>
              <b>const</b>
            </>
          }
          handleClose={togglePopup3}
        />
      )};
      <Padlock />
    </div>
  );
}

export default Stage2;

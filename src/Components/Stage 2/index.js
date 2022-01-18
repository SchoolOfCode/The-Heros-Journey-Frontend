import { Link } from 'react-router-dom';

import Input from '../Input';

import Popup from '../Popup';
import { useState } from 'react';
import './style.css';

// Stage 2 - Start of the journey - Excited - Space Bedroom - Weeks 1-3 Vanilla JS

// The hints that the user(s) have to solve - the answer for the questions will be the password.
// Later in the week: to solve the password, users will be given code to solve, i.e. iterating through an array to get a letter from the password
// PASSWORD: Done

// Functionality
// Event listeners - onclick Done
// Pop-up windows when clicked will show a hint, i.e. "splice, map, forEach" or a message, i.e. "Nothing." - DONE

// Create a button.
// Create an event listener with the button (onclick).Done
// When onclick, it will have a pop-up . Done
//Create content of the por-up window Done
// Style the button to be transparent.

// What next
//Create an introduction that tells the user how to get the password
//create problems for each pop up box

function Stage2() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [password, setPassword] = useState('');
  const [link, setLink] = useState('/stage2');
  const [intro, setIntro] = useState(false);

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

  const introBox = () => {
    setIntro(!intro);
  };

  return (
    <div
      className="stage"
      style={{
        backgroundImage: `url("https://media.istockphoto.com/vectors/spaceship-cabin-interior-space-background-with-planets-earth-and-moon-vector-id1128729226?k=20&m=1128729226&s=612x612&w=0&h=IpddtxPsMgv5GlYzprDRC49tO3UZ_fDm41muAw9zaGU=")`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `100vw 100vh`,
      }}
    >
      <h1>Stage 2</h1>
      <Input placeholder="Password" handleChange={handleChange} />
      <Link onClick={submit} to={link}>
        Enter
      </Link>
      {/* <Link to="/stage3">Stage 3</Link> */}

      {/* This button can be the intro button - tells user what to do? / the aim */}
      <input
        style={{ position: 'fixed', bottom: '30vh' }}
        type="button"
        value="Hints"
        onClick={introBox}
      />
      {intro && (
        <Popup
          content={
            <>
              <h1 className="stage1Header">
                Hello Welcome to the start of your hero journey.
              </h1>
              <p>On this level you will be exploring Vanila.js</p>
              <p>Click around to find hints for the password</p>
            </>
          }
          handleClose={introBox}
        />
      )}

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
              {/* <p>Hint 2</p> */}
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
              {/* <p>Hint 3</p> */}
            </>
          }
          handleClose={togglePopup3}
        />
      )}
    </div>
  );
}

export default Stage2;

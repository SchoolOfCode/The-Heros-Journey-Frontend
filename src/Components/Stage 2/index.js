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
      // style={{
      //   backgroundImage: `url("https://i.imgur.com/6BnAjur.png")`,
      //   backgroundRepeat: `no-repeat`,
      //   backgroundPosition: `center`,
      //   backgroundSize: `100vh`,
      // }}
    >
      <img src="https://i.imgur.com/6BnAjur.png" alt="background" className="stagebg" height="90%" />

      <Sidebar title="Into the unknown..." description="Every start of a new journey is always exciting... Eyes full of wonder, ready to learn..." stageDesc="VanillaJS" />

      {/* Pop-up 1 */}
      <input type="button" value="test" onClick={togglePopup1}
        style={{ position: 'fixed', top: '35vh', left: '47.5vw', opacity: 1, width: '35wh', height: '10vh', fontSize: '2vh' }}
      />
      {isOpen1 && ( <Popup content={
            <>
              <b>let</b>
            </>
          }
          handleClose={togglePopup1}
        />
      )}

      {/* Pop-up 2 */}
      <input type="button" onClick={togglePopup2}
        style={{ position: 'fixed', top: '14.5vh', left: '30.5vw', opacity: 0.5, width: '50wh', height: '7vh' }}
      />
      {isOpen2 && ( <Popup content={
            <>
              <b>var</b>
            </>
          }
          handleClose={togglePopup2}
        />
      )}

      {/* Pop-up 3 */}
      <input type="button" onClick={togglePopup3}
        style={{ position: 'fixed', top: '11vh', right: '33.3vw', opacity: 0.5, width: '6vw', height: '12vh' }}
      />
      {isOpen3 && ( <Popup content={
            <>
              <b>const</b>
            </>
          }
          handleClose={togglePopup3}
        />
      )};
      <Input 
        placeholder="Password" 
        handleChange={handleChange} 
        style={{ position: 'fixed', bottom: '8vh', right: '15vh'}} 
      />
      <Link 
        onClick={submit} 
        to={link}>
          <Padlock />
      </Link>
    </div>
  );
}

export default Stage2;

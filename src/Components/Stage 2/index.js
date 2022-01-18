import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Input from '../Input';
import Button from '../Button';
import Popup from '../Popup';
import { useState } from 'react';
import './style.css';

// Stage 2 - Start of the journey - Excited - Space Bedroom - Weeks 1-3 Vanilla JS

// The hints that the user(s) have to solve - the answer for the questions will be the password.
// Later in the week: to solve the password, users will be given code to solve, i.e. iterating through an array to get a letter from the password
// PASSWORD: 

// Functionality
  // Event listeners - onclick
  // Pop-up windows when clicked will show a hint, i.e. "splice, map, forEach" or a message, i.e. "Nothing." - DONE
  // Create another button component that will handle the different click events.

// Create a button.
// Create an event listener with the button (onclick).
// When onclick, it will have a pop-up message.
// Style the button to be transparent.

function Stage2() {

  function handleClick(){
    console.log("Hello");
  };

// Each pop-up will have to have their own state/function or else they all of them will open at the same time.
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
 
  const togglePopup1 = () => {
    setIsOpen1(!isOpen1);
  }

  const togglePopup2 = () => {
    setIsOpen2(!isOpen2);
  }

  const togglePopup3 = () => {
    setIsOpen3(!isOpen3);
  }

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
      <Input placeholder="Enter Password" />
      <Button text="Submit" />
      {/* <Link to="/stage3">Stage 3</Link> */}

      {/* This button can be the intro button - tells user what to do? / the aim */}
      <button onClick={handleClick}>Hello</button>
      
      
    {/* Pop-up 1 */}
      <input type="button" value="" onClick={togglePopup1} />
    {isOpen1 && <Popup
      content={<>
        <b>let</b>
        {/* <p>Hint 1</p> */}
      </>}
      handleClose={togglePopup1}
    />}

    {/* Pop-up 2 */}
    <input type="button" value="" onClick={togglePopup2} />
    {isOpen2 && <Popup
      content={<>
        <b>var</b>
        {/* <p>Hint 2</p> */}
      </>}
      handleClose={togglePopup2}
    />}

    {/* Pop-up 3 */}
    <input type="button" value="" onClick={togglePopup3} />
    {isOpen3 && <Popup
      content={<>
        <b>const</b>
        {/* <p>Hint 3</p> */}
      </>}
      handleClose={togglePopup3}
    />}

    </div>

  );
}

export default Stage2;

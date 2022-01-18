import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Input from '../Input';
import Button from '../Button';
import Popup from '../Popup';
import { useState } from 'react';

// Stage 2 - Start of the journey - Excited - Space Bedroom - Weeks 1-3 Vanilla JS

// The hints that the user(s) have to solve - the answer for the questions will be the password.
// Later in the week: to solve the password, users will be given code to solve, i.e. iterating through an array to get a letter from the password
// PASSWORD: 

// Functionality
  // Event listeners - onclick
  // Pop-up windows when clicked will show a hint, i.e. "splice, map, forEach" or a message, i.e. "Nothing."
  // Create another button component that will handle the different click events.

// Create a button.
// Create an event listener with the button (onclick).
// When onclick, it will have a pop-up message.
// Style the button to be transparent.

function Stage2() {

  function handleClick(){
    console.log("Hello");
  };

  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
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

      <button onClick={handleClick}>Test</button>
      
      
    {/* Prop */}
      <input
      type="button"
      value="Click to Open Popup"
      onClick={togglePopup}
    />
    {isOpen && <Popup
      content={<>
        <b>Design your Popup</b>
        <p>Hint 1</p>
        <button>Test button</button>
      </>}
      handleClose={togglePopup}
    />}
    </div>

  );
}

export default Stage2;

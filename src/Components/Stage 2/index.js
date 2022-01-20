import { Link } from "react-router-dom";

import Input from "../Input";
import Popup from "../Popup";
import Padlock from "../Padlock";
import SideNav from "../Sidenav";
import Click from "../Click";
import { useState } from "react";
import "./style.css";

// Stage 2 - Start of the journey - Excited - Space Bedroom - Weeks 1-3 Vanilla JS

function Stage2() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [password, setPassword] = useState("");
  const [link, setLink] = useState("/start-of-the-journey");

  function handleChange(e) {
    setPassword(e.target.value);
    if (
      e.target.value.toLowerCase() === "variables" ||
      e.target.value.toLowerCase() === "variable"
    ) {
      setLink("/imposter-syndrome");
    } else {
      setLink("/start-of-the-journey");
    }
  }

  function submit() {
    if (
      password.toLowerCase() !== "variables" &&
      password.toLowerCase() !== "variable"
    ) {
      return alert("Access Denied");
    } else {
      alert("Permission granted");
    }
  }

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

      <SideNav
        title="The world is your oyster..."
        description="Every start of a new journey is always exciting... Eyes full of wonder, ready to learn..."
        stageDesc="HTML, CSS, VanillaJS.
        Learning the fundamentals."
      />
          
      <Click
        handleClick={togglePopup1}
        style={{
          position: "fixed",
          top: "35vh",
          marginRight: "5vh",
          opacity: 0,
          width: "35wh",
          height: "10vh",
          fontSize: "2vh",
          transform: "rotate(25deg)",
        }}
      />
      {isOpen1 && (
        <Popup
          boxStyle={{
            position: "fixed",
            top: "45vh",
            left: "58vh",
          }}
          content={
            <>
              LET this pencil guide me to the next stage...
            </>
          }
          handleClose={togglePopup1}
        />
      )}
      
      <Click
        handleClick={togglePopup2}
        style={{
          position: "fixed",
          top: "13.5vh",
          marginRight: "72.1vh",
          opacity: 0,
          width: "4vh",
          height: "9vh",
          transform: "rotate(45deg)",
          borderRadius: "30%",
        }}
      />
      {isOpen2 && (
        <Popup
          boxStyle={{
            position: "fixed",
            top: "10vh",
            left: "40vh",
          }}
          content={
            <>
              Very Awesome Rubber...
            </>
          }
          handleClose={togglePopup2}
        />
      )}

      <Click
        handleClick={togglePopup3}
        style={{
          position: "fixed",
          top: "11vh",
          marginLeft: "54vh",
          opacity: 0,
          width: "13vh",
          height: "13vh",
          borderRadius: "50%",
        }}
      />
      {isOpen3 && (
        <Popup
          boxStyle={{
            position: "fixed",
            top: "10vh",
            right: "30vh",
          }}
          content={
            <>
              The earth's spin is CONSTANT...
            </>
          }
          handleClose={togglePopup3}
        />
      )}

      <Input
        className="to-be-clicked"
        placeholder="Password"
        handleChange={handleChange}
        style={{ position: "fixed", bottom: "8vh", right: "15vh" }}
      />
      <Link onClick={submit} to={link}>
        <Padlock />
      </Link>
    </div>
  );
}

export default Stage2;

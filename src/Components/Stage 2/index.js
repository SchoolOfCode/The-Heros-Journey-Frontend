import { Link } from "react-router-dom";

import Input from "../Input";
import Popup from "../Popup";
import Padlock from "../Padlock";
import SideNav from "../Sidenav";
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
      {/* <img src="https://i.imgur.com/6BnAjur.png" alt="background" className="stagebg" height="90%" /> */}
      <SideNav
        title="The world is your oyster..."
        description="Every start of a new journey is always exciting... Eyes full of wonder, ready to learn..."
        stageDesc="VanillaJS"
      />
      {/* Pop-up 1 */}
      <input
        type="button"
        onClick={togglePopup1}
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
            top: "20vh",
            width: "30vh",
            left: "58vh",
          }}
          closeBoxStyle={{ position: "fixed", top: "31.5vh", left: "83.5vh" }}
          content={
            <>
              <b>LET this pencil guide me to the next stage...</b>
            </>
          }
          handleClose={togglePopup1}
        />
      )}
      {/* Pop-up 2 */}
      <input
        type="button"
        onClick={togglePopup2}
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
            top: "1vh",
            width: "16vh",
            left: "36vh",
          }}
          closeBoxStyle={{ position: "fixed", top: "12.3vh", left: "50vh" }}
          content={
            <>
              <b>VARubber...</b>
            </>
          }
          handleClose={togglePopup2}
        />
      )}
      {/* Pop-up 3 */}
      <input
        type="button"
        onClick={togglePopup3}
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
            top: "1vh",
            width: "30vh",
            left: "90vh",
          }}
          closeBoxStyle={{ position: "fixed", top: "12.5vh", left: "115.8vh" }}
          content={
            <>
              <b>The earths spin is CONSTANT...</b>
            </>
          }
          handleClose={togglePopup3}
        />
      )}

      <Input
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

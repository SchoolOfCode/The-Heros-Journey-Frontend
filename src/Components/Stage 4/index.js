import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Click from "../Click";
import Input from "../Input";
import Padlock from "../Padlock";
import SideNav from "../Sidenav";

// Stage 4 - Heroes journey - transformative - Floating in space Weeks 7-8 React

function Stage4() {
  const [password, setPassword] = useState("");

  const [link, setLink] = useState("/stage4");

  useEffect(() => {
    console.log(
      "I wonder what happens if I click around a bit and USE some of these objects..."
    );
  }, []);

  function handleChange(e) {
    setPassword(e.target.value);
    if (e.target.value.toLowerCase() === "hooks") {
      setLink("/stage5");
    } else {
      setLink("/stage4");
    }
  }

  function submit() {
    if (password.toLowerCase() !== "hooks") {
      return alert("Access Denied");
    } else {
      alert("Permission granted");
    }
  }

  function handleClick(text) {
    switch (text) {
      case "1":
        console.log("useQuestionMark");
        break;
      case "2":
        console.log("useHelmet");
        break;
      case "3":
        console.log("usePlanet");
        break;
      case "4":
        console.log("useComet");
      case "5":
        console.log("useSuperhero");
        break;
      default:
    }
  }

  return (
    <div
      className="stage"
      style={{
        backgroundImage: `url("https://i.imgur.com/nBxe5cs.png")`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center`,
        backgroundSize: `100vh`,
      }}
    >
      <SideNav
        title="(About this stage), React etc etc"
        description="X"
        stageDesc="React"
      />
      <Click
        text="1"
        handleClick={handleClick}
        style={{
          position: "fixed",
          top: "28.5vh",
          left: "27.5vw",
          height: "9vh",
          width: "5vh",
          cursor: "pointer",
          opacity: 0,
        }}
      />
      <Click
        text="2"
        handleClick={handleClick}
        style={{
          position: "fixed",
          top: "40vh",
          left: "31vw",
          height: "12vh",
          width: "10vh",
          cursor: "pointer",
          opacity: 0,
        }}
      />
      <Click
        text="3"
        handleClick={handleClick}
        style={{
          position: "fixed",
          bottom: "11vh",
          right: "36vw",
          height: "15vh",
          width: "22vh",
          borderRadius: "150px 150px 150px 1px",
          cursor: "pointer",
          opacity: 0,
        }}
      />
      <Click
        text="4"
        handleClick={handleClick}
        style={{
          position: "fixed",
          top: "45vh",
          right: "40vw",
          height: "10vh",
          width: "11vh",
          transform: "skew(50deg)",
          opacity: 0,
          cursor: "pointer",
        }}
      />
      <Click
        text="5"
        handleClick={handleClick}
        style={{
          position: "fixed",
          top: "10vh",
          right: "35vw",
          height: "20vh",
          width: "25vh",
          transform: "skew(60deg)",
          cursor: "pointer",
          opacity: 0,
        }}
      />
      <Input
        placeholder="Password"
        handleChange={handleChange}
        style={{ position: "fixed", bottom: "8vh", right: "15vh" }}
      />
      <Link onClick={submit} to={link}>
        <Padlock />
      </Link>
      <p style={{ position: "fixed", bottom: "10vh", right: "10vh" }}>
        Hint: Console
      </p>
    </div>
  );
}

export default Stage4;

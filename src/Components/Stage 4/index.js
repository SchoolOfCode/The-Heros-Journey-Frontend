import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Click from "../Click";
import Input from "../Input";
import Padlock from "../Padlock";
import SideNav from "../Sidenav";

// Stage 4 - Heroes journey - transformative - Floating in space Weeks 7-8 React

function Stage4() {
  const [password, setPassword] = useState("");

  const [link, setLink] = useState("/transformation");

  useEffect(() => {
    console.log(
      "I wonder what happens if I click around a bit and USE some of these objects..."
    );
  }, []);

  function handleChange(e) {
    setPassword(e.target.value);
    if (
      e.target.value.toLowerCase() === "hooks" ||
      e.target.value.toLowerCase() === "hook"
    ) {
      setLink("/mission-complete");
    } else {
      setLink("/transformation");
    }
  }

  function submit() {
    if (
      password.toLowerCase() !== "hooks" &&
      password.toLowerCase() !== "hook"
    ) {
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
        title="Passing the threshold..."
        description="From this point on, there’s no turning back. You have overcome obstacles and you’re committed to the journey. This has required accepting your fears and understanding the value of connecting with others to support you on your journey."
        stageDesc="React: React router, Hooks, JSX.
        The power of reusability."
      />
      <Click
        text="1"
        handleClick={handleClick}
        style={{
          position: "fixed",
          top: "28.5vh",
          marginRight: "79vh",
          height: "9vh",
          width: "6vh",
          cursor: "pointer",
          opacity: 0,
        }}
      />
      <Click
        text="2"
        handleClick={handleClick}
        style={{
          position: "fixed",
          top: "39vh",
          marginRight: "61.5vh",
          height: "14vh",
          width: "11vh",
          cursor: "pointer",
          borderRadius: "40%",
          transform: "rotate(-25deg)",
          opacity: 0,
        }}
      />
      <Click
        text="3"
        handleClick={handleClick}
        style={{
          position: "fixed",
          bottom: "11.5vh",
          marginLeft: "26.5vh",
          height: "14vh",
          width: "26vh",
          borderRadius: "50%",
          transform: "rotate(-25deg)",
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
          marginLeft: "25.5vh",
          height: "11vh",
          width: "11vh",
          transform: "skew(40deg)",
          opacity: 0,
          cursor: "pointer",
        }}
      />
      <Click
        text="5"
        handleClick={handleClick}
        style={{
          position: "fixed",
          top: "8vh",
          marginLeft: "40.5vh",
          height: "25vh",
          width: "40vh",
          transform: "skew(50deg)",
          borderRadius: "50% 50% 40% 50%",
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

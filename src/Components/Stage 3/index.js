import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../Input";
import Text from "../Text";
import Padlock from "../Padlock";
import Sidebar from "../Sidebar";

// Stage 3 - Imposter Syndrome stage - Hole in the ship Weeks 4-5 Backend Node, SQL
// stage 3

function Stage3() {
  const [password, setPassword] = useState("");
  const [link, setLink] = useState("/stage3");

  function handleChange(e) {
    setPassword(e.target.value);
    if (e.target.value === "VALUES") {
      setLink("/stage4");
    } else {
      setLink("/stage3");
    }
  }

  function submit() {
    if (password !== "VALUES") {
      return alert("Access Denied");
    } else {
      alert("Permission granted");
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
      <Sidebar
        title="Houston, we have a problem!"
        description="
      Getting out of your comfort zone and jumping straight into the unknown is an overwhelming feeling.
      'What am I doing here?' is a question you may ask yourself as you begin to self-doubt and be filled with intrusive thoughts..."
        stageDesc="Back-end"
      />
      <Text
        text="INSERT INTO spaceship"
        style={{

          position: 'fixed',
          top: '25vh',
          left: '32vw',
          opacity: 1,
          fontSize: '2vh',
          fontWeight: 'bold',
          color: 'white',

        }}
      />
      <Text
        text="(SQL)"
        style={{

          position: 'fixed',
          top: '28vh',
          left: '34vw',
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
          right: '30vw',
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
          right: '32vw',
          opacity: 1,
          fontSize: '2vh',
          fontWeight: 'bold',
          color: 'white',

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
    </div>
  );
}

export default Stage3;

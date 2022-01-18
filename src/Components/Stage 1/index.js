import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Input from '../Input';
import Button from '../Button';

// Stage 1 - Application Stage - Main Menu of game - Typing name, (Saving state), List Info about school of code - Coding experience? Employment Statistics?

function Stage1() {
  return (
    <div
      className="stage"
      style={{
        backgroundImage: `url("https://cdn.pixabay.com/photo/2018/02/01/06/40/rocket-3122690_960_720.png")`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `100vw 100vh`,
      }}
    >
      <Input placeholder="Enter Username" />
      <Button text="Play" />
      {/* <Link to="/stage2">Stage 2</Link> */}
    </div>
  );
}

export default Stage1;

import { Link } from 'react-router-dom';
import UsernameInput from '../Stage 1/UsernameInput';
import Submit from '../Submit';
import styled from 'styled-components';

// Stage 1 - Application Stage - Main Menu of game - Typing name, (Saving state), List Info about school of code - Coding experience? Employment Statistics?

function Stage1() {
  return (
    <div>
      {/* <Link to="/stage2">Stage 2</Link> */}
      <UsernameInput />
      <Submit />
    </div>
  );
}

export default Stage1;

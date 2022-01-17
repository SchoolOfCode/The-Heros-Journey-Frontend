import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PasswordInput from '../PasswordInput';

// Stage 2 - Start of the journey - Excited - Space Bedroom - Weeks 1-3 Vanilla JS

function Stage2() {
  return (
    <div
      className="stage2"
      style={{
        backgroundImage: `url("https://cdn.pixabay.com/photo/2018/02/01/06/40/rocket-3122690_960_720.png")`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `100vw 100vh`,
      }}
    >
      <PasswordInput />
      {/* <Link to="/stage3">Stage 3</Link> */}
    </div>
  );
}

export default Stage2;

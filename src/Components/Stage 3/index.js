import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Input from '../Input';
import Button from '../Button';

// Stage 3 - Imposter Syndrome stage - Hole in the ship Weeks 4-5 Backend Node, SQL

function Stage3() {
  return (
    <div
      className="stage"
      style={{
        backgroundImage: `url("https://cdn.pixabay.com/photo/2018/02/01/06/40/rocket-3122690_960_720.png")`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `100vw 100vh`,
      }}
    >
      <Input placeholder="Enter Password" />
      <Button text="Submit" />
      {/* <Link to="/stage4">Stage 4</Link> */}
    </div>
  );
}

export default Stage3;

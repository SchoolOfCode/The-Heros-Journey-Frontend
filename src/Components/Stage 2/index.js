import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Input from '../Input';
import Button from '../Button';

// Stage 2 - Start of the journey - Excited - Space Bedroom - Weeks 1-3 Vanilla JS

function Stage2() {
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
    </div>
  );
}

export default Stage2;

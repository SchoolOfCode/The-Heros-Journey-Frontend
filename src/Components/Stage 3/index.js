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
        backgroundImage: `url("https://media.istockphoto.com/vectors/spaceship-cockpit-interior-space-and-planets-view-vector-id1208978034?k=20&m=1208978034&s=612x612&w=0&h=dAOScftuKesONgfb2q4equDR__kTe-UsIk_OmCcvMQk=")`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `100vw 100vh`,
      }}
    >
      <h1>Stage 3</h1>
      <Input placeholder="Enter Password" />
      <Button text="Submit" />
      {/* <Link to="/stage4">Stage 4</Link> */}
    </div>
  );
}

export default Stage3;

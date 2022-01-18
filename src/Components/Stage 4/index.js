import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Input from '../Input';
import Button from '../Button';

// Stage 4 - Heroes journey - transformative - Floating in space Weeks 7-8 React

function Stage4() {
  return (
    <div
      className="stage"
      style={{
        backgroundImage: `url("https://media.istockphoto.com/vectors/chairs-at-shuttle-window-with-view-of-other-planets-vector-id1361190746?k=20&m=1361190746&s=612x612&w=0&h=JKwkb_BRgNsIj95yY4xjOInH73vGtNF-PAs6KwYIuYs=")`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `100vw 100vh`,
      }}
    >
      <h1>Stage 4</h1>
      <Input placeholder="Enter Password" />
      <Button text="Submit" />
      {/* <Link to="/stage5">Stage 5</Link> */}
    </div>
  );
}

export default Stage4;

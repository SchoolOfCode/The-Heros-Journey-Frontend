import styled from 'styled-components';
import Header from '../Header';
import { Link } from 'react-router-dom';

// Stage 5 - Mission complete - Launch into the real world - Light speed into another galaxy - Motivational quotes fetched from an API of past bootcampers

function Stage5() {
  return (
    <div
      className="stage"
      style={{
        backgroundImage: `url("https://cdn.pixabay.com/photo/2018/03/26/14/07/space-3262811_960_720.jpg")`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `100vw 100vh`,
      }}
    >
      <Header text="Mission Complete!" />
      <Link to="/stage1">Play Again?</Link>
    </div>
  );
}

export default Stage5;

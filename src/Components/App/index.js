import { Routes, Route, Link } from 'react-router-dom';
import Stage1 from '../Stage 1/';
import Stage2 from '../Stage 2/';
import Stage3 from '../Stage 3/';
import Stage4 from '../Stage 4/';
import Stage5 from '../Stage 5/';


function App() {
  return (
    <div
      className="stage"
      style={{
        backgroundImage: `url("https://cdn.pixabay.com/photo/2018/02/01/06/40/rocket-3122690_960_720.png")`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `100vw 100vh`,
      }}
    >
      <Routes>
        <Route path="stage1" element={<Stage1 />} />
        <Route path="stage2" element={<Stage2 />} />
        <Route path="stage3" element={<Stage3 />} />
        <Route path="stage4" element={<Stage4 />} />
        <Route path="stage5" element={<Stage5 />} />
      </Routes>
      {/* <Link to="/stage1">Play Again</Link> */}
    </div>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import StartScreen from "../StartScreen/";
import HowToPlay from "../StartScreen/HowToPlay";
import Stage1 from "../Stage 1/";
import Stage2 from "../Stage 2/";
import Stage3 from "../Stage 3/";
import Stage4 from "../Stage 4/";
import Stage5 from "../Stage 5/";

function App() {
  return (
    <div
      className="stage"
      style={{
        backgroundColor: "white",
        backgroundRepeat: `no-repeat`,
        backgroundSize: `100vw 100vh`,
      }}
    >
      <Routes>
        <Route path="/" element={<StartScreen />} />
        <Route path="how-to-play" element={<HowToPlay />} />
        <Route path="about" element={<Stage1 />} />
        <Route path="start-of-the-journey" element={<Stage2 />} />
        <Route path="imposter-syndrome" element={<Stage3 />} />
        <Route path="transformation" element={<Stage4 />} />
        <Route path="mission-complete" element={<Stage5 />} />
      </Routes>
      {/* <Link to="/stage1">Play Again</Link> */}
    </div>
  );
}

export default App;

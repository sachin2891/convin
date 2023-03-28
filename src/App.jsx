import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Components/Homepage";
import Entertainment from "./Components/Entertainemt";
import Education from "./Components/Education";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />

          <Route path="/entertainmentvideos" element={<Entertainment />} />

          <Route path="/educationvideos" element={<Education />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

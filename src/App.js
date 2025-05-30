import "./App.css";
import WordPage from "./components/pages/WordPage";
import MainPage from "./components/pages/MainPage";
import CarouselPage from "./components/pages/CarouselPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/words" element={<WordPage />} />
          <Route path="/carousel" element={<CarouselPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

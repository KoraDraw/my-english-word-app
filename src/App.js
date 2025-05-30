import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import WordPage from "./components/pages/WordPage";
import MainPage from "./components/pages/MainPage";
import CarouselPage from "./components/pages/CarouselPage";
import Missing from "./components/Missing/Missing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/words" element={<WordPage />} />
          <Route path="/carousel" element={<CarouselPage />} />
          <Route path="/error" element={<Missing />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

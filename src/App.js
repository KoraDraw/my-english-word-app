import React, { Suspense, lazy } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import WordPage from "./components/pages/WordPage";
import MainPage from "./components/pages/MainPage";
import CarouselPage from "./components/pages/CarouselPage";
import Missing from "./components/Missing/Missing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

const NotFoundPage = lazy(() => import("./components/Missing/Missing"));

const ROUTES = {
  MAINPAGE: "/",
  WORDPAGE: "/words",
  CAROUSEL: "/carousel",
  MISSING: "*",
};

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <div className="App">
          <NavBar />
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path={ROUTES.MAINPAGE} element={<MainPage />} />
              <Route path={ROUTES.WORDPAGE} element={<WordPage />} />
              <Route path={ROUTES.CAROUSEL} element={<CarouselPage />} />
              <Route path={ROUTES.MISSING} element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </div>
      </ErrorBoundary>
    </Router>
  );
}

export default App;

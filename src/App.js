import React, { Suspense, useState, lazy } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import WordPage from "./components/pages/WordPage";
import MainPage from "./components/pages/MainPage";
import CarouselPage from "./components/pages/CarouselPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import { WordsProvider } from "./contexts/WordsContext";
import { observer, inject } from "mobx-react";
import WordsStore from "./stores/wordsStore";

const NotFoundPage = lazy(() => import("./components/Missing/Missing"));

const ROUTES = {
  MAINPAGE: "/",
  WORDPAGE: "/words",
  CAROUSEL: "/carousel",
  MISSING: "*",
};

// function App() {
//   return (
//     <WordsProvider>
//       <Router>
//         <ErrorBoundary>
//           <div className="App">
//             <NavBar />
//             <Suspense fallback={<div>Loading...</div>}>
//               <Routes>
//                 <Route path={ROUTES.MAINPAGE} element={<MainPage />} />
//                 <Route path={ROUTES.WORDPAGE} element={<WordPage />} />
//                 <Route path={ROUTES.CAROUSEL} element={<CarouselPage />} />
//                 <Route path={ROUTES.MISSING} element={<NotFoundPage />} />
//               </Routes>
//             </Suspense>
//           </div>
//         </ErrorBoundary>
//       </Router>
//     </WordsProvider>
//   );
// }

// export default App;

const App = inject(["wordsStore"])(
  observer(({ wordsStore }) => {
    const [newWord, setNewWord] = useState("");
    const addNewWord = () => {
      if (!newWord) return;
      wordsStore.addWord(newWord);
      setNewWord("");
    };
    const deleteWord = (index) => {
      wordsStore.removeWord(index);
    };
    return (
      <div>
        <ol>
          {wordsStore.words.map((word, index) => (
            <li key={index}>
              {word}
              <button onClick={() => deleteWord(index)}>delete</button>
            </li>
          ))}
        </ol>
        <input
          type="text"
          value={newWord}
          onChange={(e) => setNewWord(e.target.value)}
        />
        <button onClick={addNewBook}>add</button>
      </div>
    );
  })
);

export default App;

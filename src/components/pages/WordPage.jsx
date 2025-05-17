import React from "react";
import WordCard from "../wordCardComponent/WordCard";
import { data } from "../data/data";

function WordPage() {
  const wordInfo = {
    word: "Apple",
    transcription: "[ˈæp.əl]",
    translation: "Яблоко",
  };

  return (
    <div className="App">
      {data.map((wordInfo, index) => (
        <WordCard key={index} info={wordInfo} />
      ))}
    </div>
  );
}

export default WordPage;

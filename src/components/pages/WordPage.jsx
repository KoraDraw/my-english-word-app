import React, { useState } from "react";
import WordCard from "../WordCard/WordCard";
import styles from "../pages/WordPage.module.css";
import { data } from "../../data/data";

function WordPage() {
  const [learnedCount, setLearnedCount] = useState(0);

  const handleWordLearned = () => {
    setLearnedCount((prev) => prev + 1);
  };

  return (
    <div className="App">
      <h2>Изучено слов за тренировку: {learnedCount}</h2>
      <div className={styles["cards-container"]}>
        {data.map((item, index) => (
          <WordCard key={index} info={item} onWordShow={handleWordLearned} />
        ))}
      </div>
    </div>
  );
}

export default WordPage;

import React from "react";
import WordCard from "../WordCard/WordCard";
import styles from "../pages/WordPage.module.css";
import { data } from "../../data/data";

function WordPage() {
  return (
    <div className="App">
      <div className={styles["cards-container"]}>
        {data.map((item, index) => (
          <WordCard key={index} info={item} />
        ))}
      </div>
    </div>
  );
}

export default WordPage;

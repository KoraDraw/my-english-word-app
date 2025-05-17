import React, { useState } from "react";
import styles from "../wordCardComponent/wordCard.module.css";
import Button from "../buttonComponent/Button";

const WordCard = ({ info }) => {
  const { word, transcription, translation } = info;

  const [showTranslation, setShowTranslation] = useState(false);

  const handleShowTranslation = () => {
    setShowTranslation(true);
  };

  return (
    <div className={styles.card}>
      <h2 className={styles.word}>{word}</h2>
      <p className={styles.transcription}>{transcription}</p>

      {showTranslation ? (
        <p className={styles.translation}>{translation}</p>
      ) : null}

      {!showTranslation && (
        <Button onClick={handleShowTranslation}>Проверить</Button>
      )}
    </div>
  );
};

export default WordCard;

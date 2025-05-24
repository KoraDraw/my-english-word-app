import React, { useState } from "react";
import styles from "../WordCard/WordCard.module.css";
import Button from "../Button/Button";

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
        <Button className={styles.button} onClick={handleShowTranslation}>
          Проверить
        </Button>
      )}
    </div>
  );
};

export default WordCard;

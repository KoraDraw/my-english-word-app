import React, { useState, useRef, useEffect } from "react";
import styles from "../WordCard/WordCard.module.css";
import Button from "../Button/Button";

const WordCard = ({ info, onWordShow }) => {
  const { word, transcription, translation } = info;

  const [showTranslation, setShowTranslation] = useState(false);
  const [hasBeenCounted, setHasBeenCounted] = useState(false);

  const buttonRef = useRef(null);

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.focus();
    }
  }, [info]);

  const handleShowTranslation = () => {
    setShowTranslation(true);
    if (!hasBeenCounted && onWordShow) {
      onWordShow();
      setHasBeenCounted(true);
    }
  };

  return (
    <div className={styles.card}>
      <h2 className={styles.word}>{word}</h2>
      <p className={styles.transcription}>{transcription}</p>

      {showTranslation ? (
        <p className={styles.translation}>{translation}</p>
      ) : null}

      {!showTranslation && (
        <Button
          ref={buttonRef}
          className={styles.button}
          onClick={handleShowTranslation}
        >
          Проверить
        </Button>
      )}
    </div>
  );
};

export default WordCard;

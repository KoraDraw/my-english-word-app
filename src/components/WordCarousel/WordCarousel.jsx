import React, { useState } from "react";
import WordCard from "../WordCard/WordCard";
import styles from "./WordCarousel.module.css";

const WordCarousel = ({ data, initialIndex }) => {
  const [currentIndex, setCurrentIndex] = useState(
    initialIndex !== undefined ? initialIndex : 0
  );

  const [fade, setFade] = useState(false);

  const totalCards = data.length;

  const handleNext = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === totalCards - 1 ? 0 : prevIndex + 1
      );
      setFade(false);
    }, 500);
  };

  const handlePrev = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? totalCards - 1 : prevIndex - 1
      );
      setFade(false);
    }, 500);
  };

  if (!data || data.length === 0) {
    return <p>Нет данных для отображения</p>;
  }

  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.carouselContainer}>
        <button
          onClick={handlePrev}
          className={styles.arrowButton}
          aria-label="Назад"
        >
          &#8592;
        </button>

        <div
          className={`${styles.wordCardContainer} ${
            fade ? styles.fadeOut : ""
          }`}
        >
          <WordCard info={data[currentIndex]} />
        </div>

        <button
          onClick={handleNext}
          className={styles.arrowButton}
          aria-label="Вперед"
        >
          &#8594;
        </button>
      </div>
      <p>
        Карточка {currentIndex + 1} из {totalCards}
      </p>
    </div>
  );
};

export default WordCarousel;

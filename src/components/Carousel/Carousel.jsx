import React, { useState } from "react";
import styles from "./Carousel.module.css";

const Carousel = ({ data, renderItem, initialIndex = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [fade, setFade] = useState(false);
  const totalItems = data.length;

  const handleNext = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === totalItems - 1 ? 0 : prev + 1));
      setFade(false);
    }, 500);
  };

  const handlePrev = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === 0 ? totalItems - 1 : prev - 1));
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
          className={`${styles.itemContainer} ${fade ? styles.fadeOut : ""}`}
        >
          {renderItem(data[currentIndex], currentIndex)}
        </div>

        <button
          onClick={handleNext}
          className={styles.arrowButton}
          aria-label="Вперед"
        >
          &#8594;
        </button>
      </div>

      <div className={styles.paginationNumber} style={{ marginTop: "10px" }}>
        {currentIndex + 1} / {totalItems}
      </div>
    </div>
  );
};

export default Carousel;

import React from "react";
import WordCard from "../WordCard/WordCard";
import Carousel from "../Carousel/Carousel";

const WordCarousel = ({ data, initialIndex = 0 }) => (
  <div>
    <Carousel
      data={data}
      renderItem={(item, index) => <WordCard info={item} key={index} />}
      initialIndex={initialIndex}
    />
  </div>
);

export default WordCarousel;

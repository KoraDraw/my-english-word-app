import React from "react";
import WordCard from "../WordCard/WordCard";
import Carousel from "../Carousel/Carousel";
import { data } from "../../data/data";

const WordCarousel = () => (
  <div>
    <Carousel
      data={data}
      renderItem={(item, index) => <WordCard info={item} key={index} />}
      initialIndex={0}
    />
  </div>
);

export default WordCarousel;

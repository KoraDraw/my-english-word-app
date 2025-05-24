import React from "react";
import WordCarousel from "../WordCarousel/WordCarousel";
import { data } from "../../data/data";

const CarouselPage = () => (
  <div>
    <WordCarousel data={data} initialIndex={0} />
  </div>
);

export default CarouselPage;

import React from "react";
import { Slide } from "react-slideshow-image";
import img01 from "../img/img_01.png";

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  arrows: false
};

const Slideshow = (...props) => {
  return (
    <Slide {...properties}>
      <img className="slide_image " src={img01} />
      <img className="slide_image " src={img01} />
      <img className="slide_image " src={img01} />
      <img className="slide_image " src={img01} />
      <img className="slide_image " src={img01} />
    </Slide>
  );
};
export default Slideshow;

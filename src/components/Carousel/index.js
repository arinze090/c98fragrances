import React from "react";
import "./carousel.css";
import Carousel from "framer-motion-carousel";
const images = [
  {
    id: 1,
    image: require("../images/1.jpeg"),
  },
  {
    id: 2,
    image: require("../images/2.jpeg"),
  },
  {
    id: 3,
    image: require("../images/3.jpeg"),
  },
  {
    id: 4,
    image: require("../images/4.jpeg"),
  },
];

function Slider() {
  return (
    <div className="slider" data-aos="zoom-out" data-aos-delay="400">
      <Carousel interval={4000} renderArrowLeft={null}>
        {images.map((item, i) => (
          <img
            key={i}
            style={{
              width: "100%",
              height: "100%",
            }}
            draggable="false"
            src={item.image}
            width="100%"
            alt=""
          ></img>
        ))}
      </Carousel>
    </div>
  );
}

export default Slider;

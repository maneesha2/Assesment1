import { useState, useEffect } from "react";
import "./App.css";
import { slideImages } from "./data";

export default function ImageCarousel({ images, title, subtitle }) {
  const [imageindex, setIndex] = useState(0);
  const next = () => {
    setIndex((i) => (i + 1) % slideImages.length);
  };
  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 3000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="carousel">
      <img src={images[imageindex]} className="carouselImages" alt="" />
      <div className="carouselDots">
        {images.map((images, index) => {
          return (
            <span
              className="carouselDot"
              style={{
                backgroundColor: imageindex === index ? "blue" : "white",
              }}
              onClick={() => setIndex(index)}
            ></span>
          );
        })}
      </div>
      <div className="carouselInfo">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}

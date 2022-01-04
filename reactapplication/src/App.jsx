import { useState, useEffect } from "react";
import "./App.css";

/*import slider_1 from "../images/slider/slide_1.png";
import slider_2 from "../images/slider/slide_2.png";
import slider_3 from "../images/slider/slide_3.png";
*/

/*const images = [
  { id: 0, name: "slide_1", src: slider_1, class: "carouselimage" },
  { id: 1, name: "slide_2", src: slider_2, class: "carouselimage" },
  { id: 2, name: "slide_3", src: slider_3, class: "carouselimage" },
];*/

const images = [
  "../images/slider/slide_1.png",
  "../images/slider/slide_2.png",
  "../images/slider/slide_3.png",
];

export default function App() {
  const [imageindex, setIndex] = useState(0);
  const next = () => {
    setIndex((i) => (i + 1) % images.length);
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
      <img src={images[imageindex]} className="carouselImage" alt="" />
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
    </div>
  );
}

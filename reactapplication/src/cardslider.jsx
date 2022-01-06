import TestimonialCard from "./card";
import { useState, useEffect } from "react";

export default function CardSlider({ testimonial }) {
  const [cardIndex, setcardIndex] = useState(0);

  useEffect(() => {
    let timer = setInterval(() => {
      setcardIndex(
        (cardIndex) => (cardIndex + 1) % testimonial.components.length
      );
    }, 2000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="testimonials">
      <h1>{testimonial.title}</h1>
      <div className="testimonialCarousel">
        {testimonial.components.map((testimonial, index) => {
          return (
            <TestimonialCard
              testimonial={testimonial}
              index={index}
              cardIndex={cardIndex}
            />
          );
        })}
      </div>
      <div className="testimonialDots">
        {testimonial.components.map((testimonial, index) => {
          return (
            <span
              className="testimonialDot"
              style={{
                backgroundColor: cardIndex === index ? "blue" : "#f2f6ff",
              }}
              onClick={() => setcardIndex(index)}
            ></span>
          );
        })}
      </div>
    </div>
  );
}

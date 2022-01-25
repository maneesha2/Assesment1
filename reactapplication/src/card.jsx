export default function Card({ testimonial, cardIndex, index }) {
  return (
    <div
      className="testimonialCard"
      style={{
        display: cardIndex === index ? "block" : "none",
      }}
    >
      <div className="sliderCard">
        <img className="CardImage" {...testimonial.image} />
        <p className="reviewer">{testimonial.name}</p>
        <div className="">
          <img className="ratingImage" src="./images/star.png" alt="star" />
          <img className="ratingImage" src="./images/star.png" alt="star" />
          <img className="ratingImage" src="./images/star.png" alt="star" />
          <img className="ratingImage" src="./images/star.png" alt="star" />
          <img className="ratingImage" src="./images/star.png" alt="star" />
        </div>
        <p className="review">{testimonial.description}</p>
        <p className="subreview">{testimonial.subDescription}</p>
      </div>
    </div>
  );
}

const ratingImage = {
  src: "./images/star.png",
  alt: "rating",
};

export default function Card({ testimonial, cardIndex, index, rating }) {
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
          <div className="rating">
            {[...Array(rating)].map((e, i) => {
              return <img className="ratingImage" {...ratingImage} />;
            })}
            {/* <img className="ratingImage" src="./images/star.png" alt="star" />
          <img className="ratingImage" src="./images/star.png" alt="star" />
          <img className="ratingImage" src="./images/star.png" alt="star" />
          <img className="ratingImage" src="./images/star.png" alt="star" />
          <img className="ratingImage" src="./images/star.png" alt="star" /> */}
          </div>
        </div>
        <p className="review">{testimonial.description}</p>
        <p className="subreview">{testimonial.subDescription}</p>
      </div>
    </div>
  );
}

import "./App.css";
import Navbar from "./navBar.jsx";
import Game from "./Game";
import About from "./about";
import Newsletter from "./newsletter";
import Footer from "./Footer";
import Testimonial from "./cardslider.jsx";

import ImageCarousel from "./imageSlider";
import {
  logoImage,
  navItems,
  slideImages,
  carouselText,
  gameText,
  gameCategories,
  games,
  about,
  footer,
  newsletter,
  testimonial,
} from "./data";

function App() {
  return (
    <div>
      <Navbar logoImage={logoImage} navItems={navItems} />
      <ImageCarousel
        images={slideImages}
        title={carouselText.title}
        subtitle={carouselText.subtitle}
      />
      <Game gameText={gameText} gameCategories={gameCategories} games={games} />
      <About about={about} />
      <Testimonial testimonial={testimonial} />
      <Newsletter newsletter={newsletter} />
      <Footer footer={footer} />
    </div>
  );
}

export default App;

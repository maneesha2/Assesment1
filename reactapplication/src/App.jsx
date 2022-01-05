import "./App.css";
import Navbar from "./navBar.jsx";
import Game from "./Game";
import About from "./about";

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
    </div>
  );
}

export default App;

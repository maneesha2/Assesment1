let categoryItems = document.getElementsByClassName("categoriesItem");
for (let i = 0; i < categoryItems.length; i++) {
  categoryItems[i].style.backgroundColor = "#f2f6ff";
  categoryItems[i].style.color = "black";
}
categoryItems[n].style.backgroundColor = "#3366cc";
categoryItems[n].style.color = "#ffffff";
}

function onCarouselDotClick(n) {
  let slides = document.getElementsByClassName("carouselImage");
  let dots = document.getElementsByClassName("carouselDot");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].style.backgroundColor = "white";
  }

  slides[n].style.display = "block";
  dots[n].style.backgroundColor = "blue";
}

let imageSlideIndex = 0;
let testimonialSlideIndex = 0;

function imageTransitionSlides() {
  let slides = document.getElementsByClassName("carouselImage");
  let dots = document.getElementsByClassName("carouselDot");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].style.backgroundColor = "white";
  }

  imageSlideIndex++;
  if (imageSlideIndex > slides.length) {
    imageSlideIndex = 1;
  }
  slides[imageSlideIndex - 1].style.display = "block";
  dots[imageSlideIndex - 1].style.backgroundColor = "blue";

  setTimeout(imageTransitionSlides, 2000);
}

imageTransitionSlides();


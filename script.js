function show_hide() {
  if (a == 1) {
    document.getElementsByClassName("thankbox").style.display = "inline";
    return (a = 0);
  } else {
    document.getElementsByClassName("thankbox").style.display = "none";
    return (a = 1);
  }
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function currentDiv(n) {
  showDivs((slideIndex = n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("carouselImage");
  var dots = document.getElementsByClassName("carousleDots");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  x[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

var sIndex = 1;
showDivs(sIndex);

function plusDivs(n) {
  showDivs((sIndex += n));
}

function currentDiv(n) {
  showDivs((sIndex = n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("testimonialCarousel");
  var dots = document.getElementsByClassName("testimonialCarouselDots");
  if (n > x.length) {
    sIndex = 1;
  }
  if (n < 1) {
    sIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" test", "");
  }
  x[sIndex - 1].style.display = "block";
  dots[sIndex - 1].className += " test";
}

function onGameCategoryItemClick(n) {
  let categoryItems = document.getElementsByClassName("categoriesItem");
  for (let i = 0; i < categoryItems.length; i++) {
    categoryItems[i].style.backgroundColor = "#f2f6ff";
    categoryItems[i].style.color = "black";
  }
  categoryItems[n].style.backgroundColor = "#3366cc";
  categoryItems[n].style.color = "#ffffff";
}

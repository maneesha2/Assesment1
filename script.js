function myFunction() {
  var x = document.getElementById("categories");
  if (x.className === "gamenav") {
    x.className += " responsive";
  } else {
    x.className = "gamenav";
  }
}
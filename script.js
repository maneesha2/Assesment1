var menu = document.getElementById("categories");
var btn = menu.getElementsByClassName("categoriesitem");
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    var current = menu.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

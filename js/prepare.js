document.getElementById("living").addEventListener("click", function () {
  document.getElementsByClassName("living-frame")[0].classList.add("active");
  document.getElementsByClassName("living-book")[0].classList.add("active");
  document.getElementsByClassName("bookbackground")[0].classList.add("active");
  var img = document.getElementById("living-book");
  img.src = "./img/package/book_open.gif";
});
document.getElementById("living-x").addEventListener("click", function () {
  document.getElementsByClassName("living-frame")[0].classList.remove("active");
  var img = document.getElementById("living-book");
  img.src = "img/package/book_close.gif";
  setTimeout(() => {
    document
      .getElementsByClassName("living-book")[0]
      .classList.remove("active");
    document
      .getElementsByClassName("bookbackground")[0]
      .classList.remove("active");
  }, 1300);
});

document.getElementById("other").addEventListener("click", function () {
  document.getElementsByClassName("other-frame")[0].classList.add("active");
  document.getElementsByClassName("other-book")[0].classList.add("active");
  document.getElementsByClassName("bookbackground")[0].classList.add("active");
  var img = document.getElementById("other-book");
  img.src = "img/package/book_open.gif";
});
document.getElementById("other-x").addEventListener("click", function () {
  document.getElementsByClassName("other-frame")[0].classList.remove("active");
  var img = document.getElementById("other-book");
  img.src = "img/package/book_close.gif";
  setTimeout(() => {
    document.getElementsByClassName("other-book")[0].classList.remove("active");
    document
      .getElementsByClassName("bookbackground")[0]
      .classList.remove("active");
  }, 1300);
});

document.getElementById("food").addEventListener("click", function () {
  document.getElementsByClassName("food-frame")[0].classList.add("active");
  document.getElementsByClassName("food-book")[0].classList.add("active");
  document.getElementsByClassName("bookbackground")[0].classList.add("active");
  var img = document.getElementById("food-book");
  img.src = "img/package/book_open.gif";
});
document.getElementById("food-x").addEventListener("click", function () {
  document.getElementsByClassName("food-frame")[0].classList.remove("active");
  var img = document.getElementById("food-book");
  img.src = "img/package/book_close.gif";
  setTimeout(() => {
    document.getElementsByClassName("food-book")[0].classList.remove("active");
    document
      .getElementsByClassName("bookbackground")[0]
      .classList.remove("active");
  }, 1300);
});

document.getElementById("cook").addEventListener("click", function () {
  document.getElementsByClassName("cook-frame")[0].classList.add("active");
  document.getElementsByClassName("cook-book")[0].classList.add("active");
  document.getElementsByClassName("bookbackground")[0].classList.add("active");
  var img = document.getElementById("cook-book");
  img.src = "img/package/book_open.gif";
});
document.getElementById("cook-x").addEventListener("click", function () {
  document.getElementsByClassName("cook-frame")[0].classList.remove("active");
  var img = document.getElementById("cook-book");
  img.src = "img/package/book_close.gif";
  setTimeout(() => {
    document.getElementsByClassName("cook-book")[0].classList.remove("active");
    document
      .getElementsByClassName("bookbackground")[0]
      .classList.remove("active");
  }, 1300);
});

document.getElementById("walk").addEventListener("click", function () {
  document.getElementsByClassName("walk-frame")[0].classList.add("active");
  document.getElementsByClassName("walk-book")[0].classList.add("active");
  document.getElementsByClassName("bookbackground")[0].classList.add("active");
  var img = document.getElementById("walk-book");
  img.src = "img/package/book_open.gif";
});
document.getElementById("walk-x").addEventListener("click", function () {
  document.getElementsByClassName("walk-frame")[0].classList.remove("active");
  var img = document.getElementById("walk-book");
  img.src = "img/package/book_close.gif";
  setTimeout(() => {
    document.getElementsByClassName("walk-book")[0].classList.remove("active");
    document
      .getElementsByClassName("bookbackground")[0]
      .classList.remove("active");
  }, 1300);
});

document.getElementById("cloth").addEventListener("click", function () {
  document.getElementsByClassName("cloth-frame")[0].classList.add("active");
  document.getElementsByClassName("cloth-book")[0].classList.add("active");
  document.getElementsByClassName("bookbackground")[0].classList.add("active");
  var img = document.getElementById("cloth-book");
  img.src = "img/package/book_open.gif";
});
document.getElementById("cloth-x").addEventListener("click", function () {
  document.getElementsByClassName("cloth-frame")[0].classList.remove("active");
  var img = document.getElementById("cloth-book");
  img.src = "img/package/book_close.gif";
  setTimeout(() => {
    document.getElementsByClassName("cloth-book")[0].classList.remove("active");
    document
      .getElementsByClassName("bookbackground")[0]
      .classList.remove("active");
  }, 1300);
});

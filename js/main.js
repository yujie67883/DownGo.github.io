//Parallax

let scene = document.getElementById("scene");
let parallaxInstance = new Parallax(scene);

//Call out hamburger
$("#menu_burger").click(function () {
  $(".menu").css("visibility", "visible").show();
  $(".menu").css("top", "0");
  $("#myButton").css("pointer-events", "none");
  $("#myButton").css("display", "none");
});
$("#close_icon").click(function () {
  $(".menu").css("top", "-110vh");
  $(".menu").css("visibility", "hidden");
  $("#myButton").css("pointer-events", "auto");
  $("#myButton").css("display", "block");
});
$(".wood_option .preparing").click(function () {
  $(".menu").css("top", "-110vh");
  $(".menu").css("visibility", "hidden");
  $("#myButton").css("display", "block");
});

//transition to DwonGo_1.1
const button = document.getElementById("myButton");
const mask = document.getElementById("mask");

button.addEventListener("click", () => {
  mask.style.opacity = 1;
  setTimeout(() => {
    window.location.href = "bag_hurt.html";
  }, 1500);
});

// hint
window.onload = function () {
  setTimeout(function () {
    var hintDiv = document.querySelector(".hint");
    hintDiv.style.display = "flex";
  }, 3000);
};

// 跳轉小青蛙 to Shop / to Membership
const btnShop = document.getElementById("toshop");
const btnMember = document.getElementById("tomember");
const frogjump = document.getElementById("frogjump");
const jump = document.getElementById("jump");
const menu = document.getElementsByClassName("menu");

btnShop.addEventListener("click", () => {
  console.log("tosshop");

  jump.src = "./img/goods/jump.gif";

  frogjump.style.opacity = 1;
  setTimeout(() => {
    window.open("goods_main.html", "_blank");
    frogjump.style.opacity = 0;
  }, 4580);
});

btnMember.addEventListener("click", () => {
  console.log("tomember");

  jump.src = "./img/goods/jump.gif";

  frogjump.style.opacity = 1;
  setTimeout(() => {
    window.open("login.html", "_blank");
    frogjump.style.opacity = 0;
  }, 4580);
});

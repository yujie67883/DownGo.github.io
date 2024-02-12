//Parallax

let scene = document.getElementById("scene");
let parallaxInstance = new Parallax(scene);

//Call out hamburger
$("#menu_burger").click(function () {
  $(".menu").css("visibility", "visible").show();
  $(".menu").css("top", "0");
  $("#myButton").css("pointer-events", "none");
});
$("#close_icon").click(function () {
  $(".menu").css("top", "-110vh");
  $(".menu").css("visibility", "hidden");
  $("#myButton").css("pointer-events", "auto");
});
$(".wood_option .preparing").click(function () {
  $(".menu").css("top", "-110vh");
  $(".menu").css("visibility", "hidden");
});

//hambuger_icon change
function mDownb(obj) {
  obj.style.width = "5.4vw";
  setTimeout(this, 300);
}

function mUpb(obj) {
  obj.style.width = "6vw";
  setTimeout(this, 300);
}

function mDownx(obj) {
  obj.style.width = "3.8vw";
  setTimeout(this, 300);
}

function mUpx(obj) {
  obj.style.width = "4vw";
  setTimeout(this, 300);
}

//transition to DwonGo_1.1
const button = document.getElementById("myButton");
const mask = document.getElementById("mask");

button.addEventListener("click", () => {
  mask.style.opacity = 1;
  setTimeout(() => {
    window.location.href = "bag_hurt.html";
  }, 1500);
});

//從首頁漢堡轉換到受傷頁
document.addEventListener("DOMContentLoaded", function () {
  var mountainEquipLink = document.querySelector(".wood_option .bandage a");

  mountainEquipLink.addEventListener("click", function (event) {
    event.preventDefault();

    window.location.href = "bag_hurt.html#hurt-id";
  });
});

// hint
window.onload = function () {
  setTimeout(function () {
    var hintDiv = document.querySelector(".hint");
    hintDiv.style.display = "flex";
  }, 3000);
};

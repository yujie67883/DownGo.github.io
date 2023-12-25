//Parallax

let scene = document.getElementById("scene");
let parallaxInstance = new Parallax(scene);

//Call out hamburger
$("#menu_burger").click(function () {
  $(".menu").css("visibility", "visible").show();
  $(".menu").css("top", "0");
});
$("#close_icon").click(function () {
  $(".menu").css("top", "-110vh");
});
$(".wood_option .preparing").click(function () {
  $(".menu").css("top", "-110vh");
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

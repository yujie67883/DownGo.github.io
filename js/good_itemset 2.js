// 通知
function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}

// carousel 大圖輪播
const track = document.querySelector(".carousel_track");
const leftButton = document.querySelector(".chevron-left");
const rightButton = document.querySelector(".chevron-right");
const dots = document.querySelectorAll(".dots span");
const controlBar = document.querySelector(".control_bar::after");

let currentLeft = 0;
let barLeft = 0;
const slideWidth = 37.8;
const maxLeft = -75.6;
const minLeft = 0;

function changeImageOnEvent(button, newSrc) {
  // 直接将 button 本身的 src 属性修改
  button.src = newSrc;
}

function updateCarousel(direction) {
  let newLeft = currentLeft + direction * slideWidth;

  if (newLeft > minLeft) {
    newLeft = minLeft;
  } else if (newLeft < maxLeft) {
    newLeft = maxLeft;
  }

  currentLeft = newLeft;
  track.style.left = `${currentLeft}vw`;

  updateControlBarLeft();
}

function updateControlBarLeft() {
  let newBarLeft;

  if (currentLeft === 0) {
    newBarLeft = 0; // p1
  } else if (currentLeft === -37.8) {
    newBarLeft = 33.5; // p2
  } else if (currentLeft === -75.6) {
    newBarLeft = 67; // p3
  }

  // 更新进度条的 left 样式
  const progressBar = document.querySelector(".progress-bar");
  progressBar.style.left = `${newBarLeft}%`;

  updateSelectedPreview();
}

//下方預覽圖片變動
function updateSelectedPreview() {
  document.querySelectorAll(".preview div").forEach((preview) => {
    preview.classList.remove("selected");
  });

  if (currentLeft === 0) {
    document.querySelector(".p1").classList.add("selected");
  } else if (currentLeft === -37.8) {
    document.querySelector(".p2").classList.add("selected");
  } else if (currentLeft === -75.6) {
    document.querySelector(".p3").classList.add("selected");
  } else if (currentLeft === -113.4) {
    document.querySelector(".p4").classList.add("selected");
  }
}

//點擊預覽圖移動大圖
document.querySelectorAll(".preview div").forEach((preview, index) => {
  preview.addEventListener("click", () => {
    currentLeft = -index * 37.8;
    track.style.left = `${currentLeft}vw`;

    updateControlBarLeft();
  });
});

// 左右鍵變色
leftButton.addEventListener("mousedown", () => {
  changeImageOnEvent(leftButton, "./img/hurt/arrow.png");
  updateCarousel(1);
  console.log("Left button clicked:", leftButton);

  setTimeout(() => {
    changeImageOnEvent(leftButton, "./img/next.png");
  }, 600);
});

rightButton.addEventListener("mousedown", () => {
  changeImageOnEvent(rightButton, "./img/hurt/arrow.png");
  updateCarousel(-1);
  console.log("Left button clicked:", rightButton);

  setTimeout(() => {
    changeImageOnEvent(rightButton, "./img/next.png");
  }, 600);
});

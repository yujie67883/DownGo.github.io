// 通知
function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}

// {{ 登山配備、組合包、FAQ頁面切換 }}
document.addEventListener("DOMContentLoaded", function () {
  const equipmentTab = document.querySelector(".segmented_control.equipment");
  const packageTab = document.querySelector(".segmented_control.package");
  const faqTab = document.querySelector(".segmented_control.faq");
  const equipmentPage = document.getElementById("equipment_page");
  const packagePage = document.getElementById("package_page");
  const faqPage = document.getElementById("faq_page");

  //預設
  equipmentTab.classList.add("active");
  equipmentPage.style.display = "block";
  packagePage.style.display = "none";
  faqPage.style.display = "none";

  equipmentTab.addEventListener("click", function () {
    equipmentTab.classList.add("active");
    packageTab.classList.remove("active");
    faqTab.classList.remove("active");
    equipmentPage.style.display = "block";
    packagePage.style.display = "none";
    faqPage.style.display = "none";
  });

  packageTab.addEventListener("click", function () {
    packageTab.classList.add("active");
    equipmentTab.classList.remove("active");
    faqTab.classList.remove("active");
    packagePage.style.display = "block";
    equipmentPage.style.display = "none";
    faqPage.style.display = "none";
  });

  faqTab.addEventListener("click", function () {
    faqTab.classList.add("active");
    packageTab.classList.remove("active");
    equipmentTab.classList.remove("active");
    faqPage.style.display = "block";
    equipmentPage.style.display = "none";
    packagePage.style.display = "none";
  });

  equipmentTab.addEventListener("click", function () {
    activateTab(equipmentTab, equipmentPage, packageTab, packagePage);
  });

  packageTab.addEventListener("click", function () {
    activateTab(packageTab, packagePage, equipmentTab, equipmentPage);
  });

  //重置初始數值
  activateTab(equipmentTab, equipmentPage, packageTab, packagePage);
});

// banner carousel 首頁輪播
const track = document.querySelector(".carousel_track");
const leftButton = document.querySelector(".chevron-left");
const rightButton = document.querySelector(".chevron-right");
const dots = document.querySelectorAll(".dots span");

let currentLeft = 0;
let slideWidth = 68; // default for larger screens
let maxLeft = -272; // default for larger screens
const minLeft = 0;

// Function to update slideWidth and maxLeft based on screen width
function updateDimensions() {
  if (window.matchMedia("(max-width: 900px)").matches) {
    slideWidth = 92.2;
    maxLeft = -368.8;
  } else {
    slideWidth = 68;
    maxLeft = -272;
  }
}

window.addEventListener("resize", updateDimensions);
updateDimensions(); // Run on page load

function changeImageOnEvent(button, newSrc) {
  const img = button.querySelector("img");
  img.src = newSrc;
}

function updateCarousel(direction) {
  let newLeft = currentLeft + direction * slideWidth;

  if (newLeft > minLeft) {
    newLeft = maxLeft;
  } else if (newLeft < maxLeft) {
    newLeft = minLeft;
  }

  currentLeft = newLeft;
  track.style.left = `${currentLeft}vw`;

  updateDotsBasedOnLeft();
}

function updateDotsBasedOnLeft() {
  dots.forEach((dot) => dot.classList.remove("current_slide"));

  if (currentLeft === 0) {
    dots[0].classList.add("current_slide"); // p1
  } else if (currentLeft === -slideWidth) {
    dots[1].classList.add("current_slide"); // p2
  } else if (currentLeft === -2 * slideWidth) {
    dots[2].classList.add("current_slide"); // p3
  } else if (currentLeft === -3 * slideWidth) {
    dots[3].classList.add("current_slide"); // p4
  } else if (currentLeft === -4 * slideWidth) {
    dots[4].classList.add("current_slide"); // p5
  } else if (currentLeft > minLeft) {
    dots[4].classList.add("current_slide"); // p1 -> p5
  } else if (currentLeft < maxLeft) {
    dots[0].classList.add("current_slide"); // p5 -> p1
  }
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentLeft = -index * slideWidth;
    track.style.left = `${currentLeft}vw`;

    dots.forEach((dot) => dot.classList.remove("current_slide"));
    dot.classList.add("current_slide");
  });
});

//自動輪播
const banner = document.querySelector(".banner");
let autoMoveInterval;

function startAutoMove() {
  autoMoveInterval = setInterval(() => {
    updateCarousel(-1);
  }, 4000);
}

function stopAutoMove() {
  clearInterval(autoMoveInterval);
}

startAutoMove();

banner.addEventListener("mouseenter", stopAutoMove);
banner.addEventListener("mouseleave", startAutoMove);

// 左右鍵變色
leftButton.addEventListener("mousedown", () => {
  changeImageOnEvent(leftButton, "./img/hurt/arrow.png");
  updateCarousel(1);

  setTimeout(() => {
    changeImageOnEvent(leftButton, "./img/next.png");
  }, 600);
});

rightButton.addEventListener("mousedown", () => {
  changeImageOnEvent(rightButton, "./img/hurt/arrow.png");
  updateCarousel(-1);

  setTimeout(() => {
    changeImageOnEvent(rightButton, "./img/next.png");
  }, 600);
});

// FAQ dropdown
const qtItems = document.querySelectorAll("[class^='qt-']");

qtItems.forEach((item) => {
  item.addEventListener("click", function (event) {
    event.preventDefault();

    const currentAnswer = document.querySelector(
      `.${this.className.replace("qt", "ans")}`
    );
    const currentImg = this.querySelector("img");

    document.querySelectorAll(".open").forEach((openAnswer) => {
      if (openAnswer !== currentAnswer) {
        openAnswer.classList.remove("open");
        const openImg = openAnswer.previousElementSibling.querySelector("img");
        if (openImg) openImg.classList.remove("rotate");
      }
    });

    currentAnswer.classList.toggle("open");
    currentImg.classList.toggle("rotate");
  });
});

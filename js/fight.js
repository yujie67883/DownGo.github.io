// 山的滾動
window.addEventListener("scroll", function () {
  const scrollValue = window.scrollY;
  const imgElement = document.getElementById("longmt");

  // 根據滾動值計算新的 bottom 值
  const newBottomValue = 0 - scrollValue / 5 + "vh";

  // 將新的 bottom 值應用到 img 元素
  imgElement.style.bottom = newBottomValue;
});

$("#bag_burger").click(function () {
  $(".menu").css("visibility", "visible").show();
  $(".menu").css("top", "0");
});
$("#close_icon").click(function () {
  $(".menu").css("top", "-110vh");
  $(".menu").css("visibility", "hidden");
});
$(".wood_option .preparing").click(function () {
  $(".menu").css("top", "-110vh");
  $(".menu").css("visibility", "hidden");
});
$(".wood_option .bandage").click(function () {
  $(".menu").css("top", "-110vh");
  $(".menu").css("visibility", "hidden");
});

// header中間img翻頁效果
document.addEventListener("DOMContentLoaded", function () {
  const flipCard = document.querySelector(".thecard");

  const packageSection = document.getElementById("package-id");
  const hurtSection = document.getElementById("hurt-id");
  const entrySection = document.getElementById("entry-id");

  let currentCard = "firstCard";

  function getVisibleSection() {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    if (scrollY < packageSection.offsetTop + windowHeight) {
      return "firstCard";
    } else if (scrollY < hurtSection.offsetTop + windowHeight) {
      return "secondCard";
    } else if (scrollY < entrySection.offsetTop + windowHeight) {
      return "thirdCard";
    } else {
      return "unknown";
    }
  }

  window.onscroll = function () {
    const visibleSection = getVisibleSection();

    if (visibleSection !== currentCard) {
      currentCard = visibleSection;

      if (currentCard === "firstCard") {
        flipCard.style.transform = "rotateY(0deg)";
        flipCard.querySelector(".firstCard").style.transform = "rotateY(0deg)";
        flipCard.querySelector(".secondCard").style.transform = "rotateY(0deg)";
      } else if (currentCard === "secondCard") {
        flipCard.style.transform = "rotateY(180deg)";
        flipCard.querySelector(".firstCard").style.transform = "rotateY(0deg)";
        flipCard.querySelector(".secondCard").style.transform = "rotateY(0deg)";
      } else if (currentCard === "thirdCard") {
        flipCard.style.transform = "rotateY(180deg)";
        flipCard.querySelector(".firstCard").style.transform =
          "rotateY(180deg)";
        flipCard.querySelector(".secondCard").style.transform =
          "rotateY(180deg)";
      }
    }
  };
});

// header海拔高度滾動效果
document.addEventListener("DOMContentLoaded", function () {
  const scrollingNumberElement = document.getElementById("scrollingNumber");

  let currentNumber = 100;

  window.addEventListener("scroll", function () {
    const scrollPercentage =
      (window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight)) *
      100;

    const newNumber = Math.round(100 + (scrollPercentage / 100) * 400);

    if (newNumber !== currentNumber) {
      currentNumber = newNumber;
      scrollingNumberElement.textContent = currentNumber;
    }
  });
});

// header中間img翻頁效果
document.addEventListener("DOMContentLoaded", function () {
  const theCard = document.querySelector(".thecard");
  const mainContainer = document.getElementById("maincontainer");

  let isCardFlipped = false;

  window.addEventListener("scroll", function () {
    const scrollPercentage =
      (window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight)) *
      100;

    if (scrollPercentage >= 100 && !isCardFlipped) {
      theCard.style.transform = "rotateY(180deg)";
      isCardFlipped = true;
    } else if (scrollPercentage < 100 && isCardFlipped) {
      theCard.style.transform = "rotateY(0deg)";
      isCardFlipped = false;
    }
  });
});

// header海拔高度滾動效果
document.addEventListener("DOMContentLoaded", function () {
  const scrollingNumberElement = document.getElementById("scrollingNumber");

  let currentNumber = 1000;

  window.addEventListener("scroll", function () {
    const scrollPercentage =
      (window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight)) *
      100;

    const newNumber = Math.round(100 + (scrollPercentage / 1000) * 1400);

    if (newNumber !== currentNumber) {
      currentNumber = newNumber;
      scrollingNumberElement.textContent = currentNumber;
    }
  });
});

// header level 等級滾動效果
document.addEventListener("DOMContentLoaded", function () {
  const scrollingTextElement = document.getElementById("scrollingText");

  let currentText = "1-1";

  window.addEventListener("scroll", function () {
    const scrollPercentage =
      (window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight)) *
      100;

    const newText = scrollPercentage >= 50 ? "1-2" : "1-1";

    if (newText !== currentText) {
      currentText = newText;
      scrollingTextElement.textContent = currentText;
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const scrollingTextElement = document.getElementById("scrollingText");

  let currentText = "1-1";

  window.addEventListener("scroll", function () {
    const scrollPercentage =
      (window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight)) *
      100;

    const newText = scrollPercentage >= 50 ? "1-2" : "1-1";

    if (newText !== currentText) {
      currentText = newText;
      scrollingTextElement.textContent = currentText;
    }
  });
});

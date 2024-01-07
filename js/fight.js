// 山的滾動
window.addEventListener("scroll", function () {
  const scrollValue = window.scrollY;
  const imgElement = document.getElementById("longmt");

  const newBottomValue = 0 - scrollValue / 5 + "vh";

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
$(".enter_option .snakbee").click(function () {
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

  let currentNumber = 1000;

  window.addEventListener("scroll", function () {
    const scrollPercentage =
      (window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight)) *
      100;

    const newNumber = Math.round(500 + (scrollPercentage / 100) * 4000);

    if (newNumber !== currentNumber) {
      currentNumber = newNumber;
      scrollingNumberElement.textContent = currentNumber;
    }
  });
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

// 人物走停
document.addEventListener("DOMContentLoaded", function () {
  var personImage = document.getElementById("personImage");
  var personDiv = document.querySelector(".person");
  var isScrolling;
});
window.addEventListener("scrollY", function () {
  // 在滚动时添加 'active' 类
  personImage.classList.add("active");
  personImage.src = "./img/fight/person_walk.gif"; // 更改图片路径

  // 清除之前的计时器
  clearTimeout(isScrolling);

  // 设置计时器，在停止滚动时移除 'active' 类
  isScrolling = setTimeout(function () {
    personImage.classList.remove("active");
    personImage.src = "./img/fight/person_stop.png"; // 恢复初始图片路径
  }, 200); // 这里的 200 是一个延迟时间，你可以根据需要调整
});

//怪獸移動
//毒蘑
window.addEventListener("scroll", function () {
  const scrollValue = window.scrollY;
  const bgElement = document.querySelector(".bg");
  const imgElement = document.getElementById("snakebee");

  const newBottomValue = -125 + scrollValue / 6 + "vh";
  const newTopValue = -23 + "vh";

  if (scrollValue >= -147.2 && scrollValue <= -116.8) {
    imgElement.style.top = newTopValue;
  } else {
    imgElement.style.top = newBottomValue;
  }

  if (scrollValue === 0) {
    imgElement.style.top = "-125vh";
  }
});
//鐵支麵粉鯛
window.addEventListener("scroll", function () {
  const scrollValue = window.scrollY;
  const bgElement = document.querySelector(".bg");
  const imgElement = document.getElementById("fish");

  const newBottomValue = -225 + scrollValue / 6 + "vh";
  const newTopValue = -73 + "vh";

  if (scrollValue >= 8 && scrollValue <= -37) {
    imgElement.style.top = newTopValue;
  } else {
    imgElement.style.top = newBottomValue;
  }

  if (scrollValue === 0) {
    imgElement.style.top = "-225vh";
  }
});
//熊豬
window.addEventListener("scroll", function () {
  const scrollValue = window.scrollY;
  const bgElement = document.querySelector(".bg");
  const imgElement = document.getElementById("pigbear");

  const newBottomValue = -325 + scrollValue / 6 + "vh";
  const newTopValue = 2 + "vh";

  if (scrollValue >= 2 && scrollValue <= -60) {
    imgElement.style.top = newTopValue;
  } else {
    imgElement.style.top = newBottomValue;
  }

  if (scrollValue === 0) {
    imgElement.style.top = "-325vh";
  }
});
//缺氧
window.addEventListener("scroll", function () {
  const scrollValue = window.scrollY;
  const bgElement = document.querySelector(".bg");
  const imgElement = document.getElementById("hypoxia");

  const newBottomValue = -425 + scrollValue / 6 + "vh";
  const newTopValue = 2 + "vh";

  if (scrollValue >= 2 && scrollValue <= -60) {
    imgElement.style.top = newTopValue;
  } else {
    imgElement.style.top = newBottomValue;
  }

  if (scrollValue === 0) {
    imgElement.style.top = "-425vh";
  }
});
//寒冰龍
window.addEventListener("scroll", function () {
  const scrollValue = window.scrollY;
  const bgElement = document.querySelector(".bg");
  const imgElement = document.getElementById("dragon");

  const newBottomValue = -575 + scrollValue / 6 + "vh";
  const newTopValue = 2 + "vh";

  if (scrollValue >= 2 && scrollValue <= -60) {
    imgElement.style.top = newTopValue;
  } else {
    imgElement.style.top = newBottomValue;
  }

  if (scrollValue === 0) {
    imgElement.style.top = "-575vh";
  }
});

//檔案出現:毒螫魔
document.addEventListener("DOMContentLoaded", function () {
  var snakebee = document.getElementById("snakebee");
  var snakbee = document.querySelector(".cards-snakbee");

  snakebee.addEventListener("click", function () {
    console.log("#snakebee clicked");

    var currentZIndex = parseInt(getComputedStyle(snakbee).zIndex) || 0;

    var newZIndex = currentZIndex + 2;

    snakbee.style.zIndex = newZIndex.toString();

    snakbee.style.opacity = 1;
  });
});

//標籤頁點換:毒螫魔
document.addEventListener("DOMContentLoaded", function () {
  var cardsPages = document.getElementById("cards-pages-snakbee");
  var pageInfo = document.getElementById("page-info-snakbee");
  var pageTmi = document.getElementById("page-tmi-snakbee");
  var pageHelp = document.getElementById("page-help-snakbee");

  pageInfo.addEventListener("click", function () {
    cardsPages.style.backgroundImage = "url(./img/fight/page01.png)";
  });

  pageTmi.addEventListener("click", function () {
    cardsPages.style.backgroundImage = "url(./img/fight/page02.png)";
  });

  pageHelp.addEventListener("click", function () {
    cardsPages.style.backgroundImage = "url(./img/fight/page03.png)";
  });
});
//文字切換:毒螫魔
document.addEventListener("DOMContentLoaded", function () {
  var cardInfo = document.querySelector(".snakbee-info");
  var cardTmi = document.querySelector(".snakbee-tmi");
  var cardHelp = document.querySelector(".snakbee-help");

  var pageInfo = document.getElementById("page-info-snakbee");
  var pageTmi = document.getElementById("page-tmi-snakbee");
  var pageHelp = document.getElementById("page-help-snakbee");

  var snakebee = document.getElementById("snakebee");

  function hideAllCards() {
    cardInfo.style.display = "none";
    cardTmi.style.display = "none";
    cardHelp.style.display = "none";
  }

  function showCardContent(cardToShow) {
    if (cardToShow === "info") {
      cardInfo.style.display = "block";
      cardTmi.style.display = "none";
      cardHelp.style.display = "none";
    } else if (cardToShow === "tmi") {
      cardTmi.style.display = "block";
      cardInfo.style.display = "none";
      cardHelp.style.display = "none";
    } else if (cardToShow === "help") {
      cardHelp.style.display = "block";
      cardInfo.style.display = "none";
      cardTmi.style.display = "none";
    }
  }

  pageInfo.addEventListener("click", function () {
    showCardContent("info");
  });

  pageTmi.addEventListener("click", function () {
    showCardContent("tmi");
  });

  pageHelp.addEventListener("click", function () {
    showCardContent("help");
  });

  if (performance.navigation.type === 1) {
    hideAllCards();
  }

  showCardContent("info");
});

//檔案出現:鐵支麵粉雕
document.addEventListener("DOMContentLoaded", function () {
  var fish = document.getElementById("fish");
  var cardsFish = document.querySelector(".cards-fish");

  fish.addEventListener("click", function () {
    console.log("#fish clicked");

    var currentZIndex = parseInt(getComputedStyle(cardsFish).zIndex) || 0;

    var newZIndex = currentZIndex + 2;

    cardsFish.style.zIndex = newZIndex.toString();

    cardsFish.style.opacity = 1;
  });
});

//標籤頁點換:鐵支麵粉雕
document.addEventListener("DOMContentLoaded", function () {
  var cardsPages = document.getElementById("cards-pages-fish");
  var pageInfo = document.getElementById("page-info-fish");
  var pageTmi = document.getElementById("page-tmi-fish");
  var pageHelp = document.getElementById("page-help-fish");

  pageInfo.addEventListener("click", function () {
    cardsPages.style.backgroundImage = "url(./img/fight/page01.png)";
  });

  pageTmi.addEventListener("click", function () {
    cardsPages.style.backgroundImage = "url(./img/fight/page02.png)";
  });

  pageHelp.addEventListener("click", function () {
    cardsPages.style.backgroundImage = "url(./img/fight/page03.png)";
  });
});
//文字切換:鐵支麵粉雕
document.addEventListener("DOMContentLoaded", function () {
  var cardInfo = document.querySelector(".fish-info");
  var cardTmi = document.querySelector(".fish-tmi");
  var cardHelp = document.querySelector(".fish-help");

  var pageInfo = document.getElementById("page-info-fish");
  var pageTmi = document.getElementById("page-tmi-fish");
  var pageHelp = document.getElementById("page-help-fish");

  var fish = document.getElementById("fish");

  function hideAllCards() {
    cardInfo.style.display = "none";
    cardTmi.style.display = "none";
    cardHelp.style.display = "none";
  }

  function showCardContent(cardToShow) {
    if (cardToShow === "info") {
      cardInfo.style.display = "block";
      cardTmi.style.display = "none";
      cardHelp.style.display = "none";
    } else if (cardToShow === "tmi") {
      cardTmi.style.display = "block";
      cardInfo.style.display = "none";
      cardHelp.style.display = "none";
    } else if (cardToShow === "help") {
      cardHelp.style.display = "block";
      cardInfo.style.display = "none";
      cardTmi.style.display = "none";
    }
  }

  hideAllCards();

  pageInfo.addEventListener("click", function () {
    showCardContent("info");
  });

  pageTmi.addEventListener("click", function () {
    showCardContent("tmi");
  });

  pageHelp.addEventListener("click", function () {
    showCardContent("help");
  });

  if (performance.navigation.type === 1) {
    hideAllCards();
  }

  showCardContent("info");
});

//檔案出現:熊豬
document.addEventListener("DOMContentLoaded", function () {
  var pigbear = document.getElementById("pigbear");
  var cardsPigbear = document.querySelector(".cards-pigbear");

  pigbear.addEventListener("click", function () {
    console.log("#pigbear clicked");

    var currentZIndex = parseInt(getComputedStyle(cardsPigbear).zIndex) || 0;

    var newZIndex = currentZIndex + 2;

    cardsPigbear.style.zIndex = newZIndex.toString();

    cardsPigbear.style.opacity = 1;
  });
});

//標籤頁點換:熊豬
document.addEventListener("DOMContentLoaded", function () {
  var cardsPages = document.getElementById("cards-pages-pigbear");
  var pageInfo = document.getElementById("page-info-pigbear");
  var pageTmi = document.getElementById("page-tmi-pigbear");
  var pageHelp = document.getElementById("page-help-pigbear");

  pageInfo.addEventListener("click", function () {
    cardsPages.style.backgroundImage = "url(./img/fight/page01.png)";
  });

  pageTmi.addEventListener("click", function () {
    cardsPages.style.backgroundImage = "url(./img/fight/page02.png)";
  });

  pageHelp.addEventListener("click", function () {
    cardsPages.style.backgroundImage = "url(./img/fight/page03.png)";
  });
});
//文字切換:熊豬
document.addEventListener("DOMContentLoaded", function () {
  var cardInfo = document.querySelector(".pigbear-info");
  var cardTmi = document.querySelector(".pigbear-tmi");
  var cardHelp = document.querySelector(".pigbear-help");

  var pageInfo = document.getElementById("page-info-pigbear");
  var pageTmi = document.getElementById("page-tmi-pigbear");
  var pageHelp = document.getElementById("page-help-pigbear");

  var pigbear = document.getElementById("pigbear");

  function hideAllCards() {
    cardInfo.style.display = "none";
    cardTmi.style.display = "none";
    cardHelp.style.display = "none";
  }

  function showCardContent(cardToShow) {
    if (cardToShow === "info") {
      cardInfo.style.display = "block";
      cardTmi.style.display = "none";
      cardHelp.style.display = "none";
    } else if (cardToShow === "tmi") {
      cardTmi.style.display = "block";
      cardInfo.style.display = "none";
      cardHelp.style.display = "none";
    } else if (cardToShow === "help") {
      cardHelp.style.display = "block";
      cardInfo.style.display = "none";
      cardTmi.style.display = "none";
    }
  }

  hideAllCards();

  pageInfo.addEventListener("click", function () {
    showCardContent("info");
  });

  pageTmi.addEventListener("click", function () {
    showCardContent("tmi");
  });

  pageHelp.addEventListener("click", function () {
    showCardContent("help");
  });

  if (performance.navigation.type === 1) {
    hideAllCards();
  }

  showCardContent("info");
});

//檔案出現:高山絕氧獸
document.addEventListener("DOMContentLoaded", function () {
  var hypoxia = document.getElementById("hypoxia");
  var cardsHypoxia = document.querySelector(".cards-hypoxia");

  hypoxia.addEventListener("click", function () {
    console.log("#hypoxia clicked");

    var currentZIndex = parseInt(getComputedStyle(cardsHypoxia).zIndex) || 0;

    var newZIndex = currentZIndex + 2;

    cardsHypoxia.style.zIndex = newZIndex.toString();

    cardsHypoxia.style.opacity = 1;
  });
});

//標籤頁點換:高山絕氧獸
document.addEventListener("DOMContentLoaded", function () {
  var cardsPages = document.getElementById("cards-pages-hypoxia");
  var pageInfo = document.getElementById("page-info-hypoxia");
  var pageTmi = document.getElementById("page-tmi-hypoxia");
  var pageHelp = document.getElementById("page-help-hypoxia");

  pageInfo.addEventListener("click", function () {
    cardsPages.style.backgroundImage = "url(./img/fight/page01.png)";
  });

  pageTmi.addEventListener("click", function () {
    cardsPages.style.backgroundImage = "url(./img/fight/page02.png)";
  });

  pageHelp.addEventListener("click", function () {
    cardsPages.style.backgroundImage = "url(./img/fight/page03.png)";
  });
});
//文字切換:高山絕氧獸
document.addEventListener("DOMContentLoaded", function () {
  var cardInfo = document.querySelector(".hypoxia-info");
  var cardTmi = document.querySelector(".hypoxia-tmi");
  var cardHelp = document.querySelector(".hypoxia-help");

  var pageInfo = document.getElementById("page-info-hypoxia");
  var pageTmi = document.getElementById("page-tmi-hypoxia");
  var pageHelp = document.getElementById("page-help-hypoxia");

  var hypoxia = document.getElementById("hypoxia");

  function hideAllCards() {
    cardInfo.style.display = "none";
    cardTmi.style.display = "none";
    cardHelp.style.display = "none";
  }

  function showCardContent(cardToShow) {
    if (cardToShow === "info") {
      cardInfo.style.display = "block";
      cardTmi.style.display = "none";
      cardHelp.style.display = "none";
    } else if (cardToShow === "tmi") {
      cardTmi.style.display = "block";
      cardInfo.style.display = "none";
      cardHelp.style.display = "none";
    } else if (cardToShow === "help") {
      cardHelp.style.display = "block";
      cardInfo.style.display = "none";
      cardTmi.style.display = "none";
    }
  }

  hideAllCards();

  pageInfo.addEventListener("click", function () {
    showCardContent("info");
  });

  pageTmi.addEventListener("click", function () {
    showCardContent("tmi");
  });

  pageHelp.addEventListener("click", function () {
    showCardContent("help");
  });

  if (performance.navigation.type === 1) {
    hideAllCards();
  }

  showCardContent("info");
});

//檔案出現:寒冰龍
document.addEventListener("DOMContentLoaded", function () {
  var dragon = document.getElementById("dragon");
  var cardsDragon = document.querySelector(".cards-dragon");

  dragon.addEventListener("click", function () {
    console.log("#dragon clicked");

    var currentZIndex = parseInt(getComputedStyle(cardsDragon).zIndex) || 0;

    var newZIndex = currentZIndex + 2;

    cardsDragon.style.zIndex = newZIndex.toString();

    cardsDragon.style.opacity = 1;
  });
});

//標籤頁點換:寒冰龍
document.addEventListener("DOMContentLoaded", function () {
  var cardsPages = document.getElementById("cards-pages-dragon");
  var pageInfo = document.getElementById("page-info-dragon");
  var pageTmi = document.getElementById("page-tmi-dragon");
  var pageHelp = document.getElementById("page-help-dragon");

  pageInfo.addEventListener("click", function () {
    cardsPages.style.backgroundImage = "url(./img/fight/page01.png)";
  });

  pageTmi.addEventListener("click", function () {
    cardsPages.style.backgroundImage = "url(./img/fight/page02.png)";
  });

  pageHelp.addEventListener("click", function () {
    cardsPages.style.backgroundImage = "url(./img/fight/page03.png)";
  });
});
//文字切換:寒冰龍
document.addEventListener("DOMContentLoaded", function () {
  var cardInfo = document.querySelector(".dragon-info");
  var cardTmi = document.querySelector(".dragon-tmi");
  var cardHelp = document.querySelector(".dragon-help");

  var pageInfo = document.getElementById("page-info-dragon");
  var pageTmi = document.getElementById("page-tmi-dragon");
  var pageHelp = document.getElementById("page-help-dragon");

  var dragon = document.getElementById("dragon");

  function hideAllCards() {
    cardInfo.style.display = "none";
    cardTmi.style.display = "none";
    cardHelp.style.display = "none";
  }

  function showCardContent(cardToShow) {
    if (cardToShow === "info") {
      cardInfo.style.display = "block";
      cardTmi.style.display = "none";
      cardHelp.style.display = "none";
    } else if (cardToShow === "tmi") {
      cardTmi.style.display = "block";
      cardInfo.style.display = "none";
      cardHelp.style.display = "none";
    } else if (cardToShow === "help") {
      cardHelp.style.display = "block";
      cardInfo.style.display = "none";
      cardTmi.style.display = "none";
    }
  }

  hideAllCards();

  pageInfo.addEventListener("click", function () {
    showCardContent("info");
  });

  pageTmi.addEventListener("click", function () {
    showCardContent("tmi");
  });

  pageHelp.addEventListener("click", function () {
    showCardContent("help");
  });

  if (performance.navigation.type === 1) {
    hideAllCards();
  }

  showCardContent("info");
});

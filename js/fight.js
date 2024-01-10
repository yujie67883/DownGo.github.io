// 山的滾動
window.addEventListener("scroll", function () {
  const scrollValue = window.scrollY;
  const imgElement = document.getElementById("longmt");

  const newBottomValue = 0 - scrollValue / 5 + "vh";

  imgElement.style.bottom = newBottomValue;
});
//從首頁漢堡轉換到背包頁
document.addEventListener("DOMContentLoaded", function () {
  var mountainEquipLink = document.querySelector(".wood_option .preparing a");

  mountainEquipLink.addEventListener("click", function (event) {
    event.preventDefault();

    window.location.href = "bag_hurt.html##package-id";
  });
});
//從首頁漢堡轉換到受傷頁
document.addEventListener("DOMContentLoaded", function () {
  var mountainEquipLink = document.querySelector(".wood_option .bandage a");

  mountainEquipLink.addEventListener("click", function (event) {
    event.preventDefault();

    window.location.href = "bag_hurt.html#hurt-id";
  });
});

//漢堡頁轉換
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
$(".enter_option .snakbee_menu").click(function () {
  $(".menu").css("top", "-110vh");
  $(".menu").css("visibility", "hidden");
});
$(".enter_option .fish_menu").click(function () {
  $(".menu").css("top", "-110vh");
  $(".menu").css("visibility", "hidden");
});
$(".enter_option .pig").click(function () {
  $(".menu").css("top", "-110vh");
  $(".menu").css("visibility", "hidden");
});
$(".enter_option .hypoxia_menu").click(function () {
  $(".menu").css("top", "-110vh");
  $(".menu").css("visibility", "hidden");
});
$(".enter_option .hypothermia").click(function () {
  $(".menu").css("top", "-110vh");
  $(".menu").css("visibility", "hidden");
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

    const newNumber = Math.round(500 + (scrollPercentage / 100) * 3000);

    if (newNumber !== currentNumber) {
      currentNumber = newNumber;
      scrollingNumberElement.textContent = currentNumber;
    }
  });
});

// header中間img翻頁效果
document.addEventListener("DOMContentLoaded", function () {
  const theCard = document.querySelector(".thecard");
  let isCardFlipped = false;

  window.addEventListener("scroll", function () {
    const scrollingNumber = parseInt(
      document.getElementById("scrollingNumber").textContent
    );

    let backgroundImageSource = "../img/entery/title.png"; // 默认背景图源

    if (scrollingNumber >= 1000 && scrollingNumber < 1500) {
      backgroundImageSource = "./img/fight/title_snake.png";
    } else if (scrollingNumber >= 1500 && scrollingNumber < 2000) {
      backgroundImageSource = "./img/fight/title_fish.png";
    } else if (scrollingNumber >= 2000 && scrollingNumber < 2500) {
      backgroundImageSource = "./img/fight/title_bear.png";
    } else if (scrollingNumber >= 2500 && scrollingNumber < 3000) {
      backgroundImageSource = "./img/fight/title_hmt.png";
    } else if (scrollingNumber >= 3000) {
      backgroundImageSource = "./img/fight/title_clod.png";
    } else {
      backgroundImageSource = "./img/entery/title.png";
    }

    theCard.style.transition = "all 0.3s ease";
    theCard.style.transform = "rotateY(180deg)";

    setTimeout(function () {
      theCard.style.backgroundImage = `url("${backgroundImageSource}")`;
      theCard.style.transform = "rotateY(0deg)";
    }, 300);
  });
});

// header level 等級滾動效果
document.addEventListener("DOMContentLoaded", function () {
  const scrollingNumberElement = document.getElementById("scrollingNumber");
  const scrollingTextElement = document.getElementById("scrollingText");

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

      let newText;
      if (currentNumber >= 3000) {
        newText = "2-5";
      } else if (currentNumber >= 2500) {
        newText = "2-4";
      } else if (currentNumber >= 2000) {
        newText = "2-3";
      } else if (currentNumber >= 1500) {
        newText = "2-2";
      } else if (currentNumber >= 1000) {
        newText = "2-1";
      } else {
        newText = "2-0";
      }

      scrollingTextElement.textContent = newText;
    }
  });
});

// 人物逃跑
function runAway() {
  var personImage = document.getElementById("personImage");

  personImage.src = "./img/fight/person_run.gif";

  setTimeout(function () {
    personImage.src = "./img/fight/person_walk.gif";
  }, 1500);

  //逃跑:滾動回到頁面頂端
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

//前進按鈕

document.getElementById("btn-go1").classList.add("active");

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    const scrollingNumber = parseInt(
      document.getElementById("scrollingNumber").textContent
    );
    // Reset active class on other buttons
    document.getElementById("btn-go2").classList.remove("active");
    document.getElementById("btn-go3").classList.remove("active");
    document.getElementById("btn-go4").classList.remove("active");
    document.getElementById("btn-go5").classList.remove("active");

    // Add active class based on scrollingNumber
    if (scrollingNumber >= 1000 && scrollingNumber < 1350) {
      document.getElementById("btn-go1").classList.add("active");
    } else if (scrollingNumber >= 1350 && scrollingNumber < 2000) {
      document.getElementById("btn-go2").classList.add("active");
    } else if (scrollingNumber >= 2000 && scrollingNumber < 2200) {
      document.getElementById("btn-go3").classList.add("active");
    } else if (scrollingNumber >= 2200 && scrollingNumber < 3000) {
      document.getElementById("btn-go4").classList.add("active");
    } else if (scrollingNumber >= 3000) {
      document.getElementById("btn-go5").classList.add("active");
    } else if (scrollingNumber < 1000 && scrollingNumber == 0) {
      document.getElementById("btn-go1").classList.add("active");
    }
  });
});

function go1() {
  // Assuming 'snakebee' is the id of the div you want to scroll to
  var snakebeeDiv = document.getElementById("snakebee");
  console.log("click1");

  if (snakebeeDiv) {
    var targetPosition =
      window.scrollY - snakebeeDiv.getBoundingClientRect().top / 1.75;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  }
}

function go2() {
  // Assuming 'snakebee' is the id of the div you want to scroll to
  var fishDiv = document.getElementById("fish");
  console.log("click2");

  if (fishDiv) {
    var targetPosition =
      window.scrollY - fishDiv.getBoundingClientRect().top / 1.7;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  }
}
function go3() {
  // Assuming 'snakebee' is the id of the div you want to scroll to
  var pigbearDiv = document.getElementById("pigbear");
  console.log("click3");

  if (pigbearDiv) {
    var targetPosition =
      window.scrollY - pigbearDiv.getBoundingClientRect().top / 1.75;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  }
}
function go4() {
  // Assuming 'snakebee' is the id of the div you want to scroll to
  var hypoxiaDiv = document.getElementById("hypoxia");
  console.log("click4");

  if (hypoxiaDiv) {
    var targetPosition =
      window.scrollY - hypoxiaDiv.getBoundingClientRect().top / 1.68;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  }
}

function go5() {
  // Assuming 'snakebee' is the id of the div you want to scroll to
  var dragonDiv = document.getElementById("dragon");
  console.log("click5");

  if (dragonDiv) {
    var targetPosition =
      window.scrollY - dragonDiv.getBoundingClientRect().top / 1.68;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  }
}

//路面滾動
document.addEventListener("DOMContentLoaded", function () {
  var roadImg = document.getElementById("road");

  window.addEventListener("scroll", function () {
    var scrollPercentage =
      (window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight)) *
      100;

    var newBottomValue = Math.max(-109, -scrollPercentage);

    roadImg.style.bottom = newBottomValue + "vh";
  });
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

  const newBottomValue = -400 + scrollValue / 6 + "vh";
  const newTopValue = 2 + "vh";

  if (scrollValue >= 2 && scrollValue <= -60) {
    imgElement.style.top = newTopValue;
  } else {
    imgElement.style.top = newBottomValue;
  }

  if (scrollValue === 0) {
    imgElement.style.top = "-400vh";
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

//{{ Btn-前進 }}
let gotopRunning = false;
document.querySelector(".Btn_go").addEventListener("click", function () {
  if (gotopRunning) return;

  gotopRunning = true;
  //山的滾動
  const bgElement = document.querySelector(".bg");
  const currentBottom = getComputedStyle(bgElement).bottom;

  const viewportHeight = window.innerHeight;
  const currentBottomValue = (parseFloat(currentBottom) / viewportHeight) * 100;

  const newBottomValue = currentBottomValue - 44;

  if (newBottomValue <= -300) {
    //反彈效果動畫
    bgElement.style.setProperty("--start-bottom", `${currentBottomValue}vh`);
    bgElement.style.animation = "bounce-up 1s ease-in-out";

    bgElement.addEventListener(
      "animationend",
      function () {
        bgElement.style.animation = "";
      },
      { once: true }
    );
  } else {
    bgElement.style.bottom = `${newBottomValue}vh`;
  }

  //瑪利歐的移動
  const marioPlace = document.querySelector(".mario");
  const currentPlace = getComputedStyle(marioPlace).bottom;

  const currentPlaceValue = (parseFloat(currentPlace) / viewportHeight) * 100;

  const newPlaceValue = currentPlaceValue + 4.3;

  if (newPlaceValue >= 59) {
    gotopRunning = false;
    return;
  } else {
    marioPlace.style.bottom = `${newPlaceValue}vh`;
  }

  //海拔指標的移動
  const altitueVallue = document.querySelector(".altitue");
  const altitueNum = document.querySelector(".altitueNum");
  const currentAltitue = getComputedStyle(altitueVallue).bottom;

  const currentAltitueValue =
    (parseFloat(currentAltitue) / viewportHeight) * 100;

  const newAltitueValue = currentAltitueValue + 4.3;

  if (newAltitueValue >= 61) {
    return;
  } else {
    altitueVallue.style.bottom = `${newAltitueValue}vh`;
  }

  if (newAltitueValue < 39) {
    animateNumber(50, 500, 900, altitueNum);
    // (開始, 結束, 總時長ms, #altitueNum)
  } else if (newAltitueValue >= 39 && newAltitueValue < 43) {
    animateNumber(500, 1000, 900, altitueNum);
    $(".snake").css("bottom", "30vh");
    $(".snake").css("z-index", "4");
    console.log("30");
  } else if (newAltitueValue >= 43 && newAltitueValue < 48) {
    animateNumber(1000, 1500, 900, altitueNum);
    $(".snake").css("bottom", "-32vh");
    $(".snake").css("z-index", "-1");
    console.log("-32");
  } else if (newAltitueValue >= 48 && newAltitueValue < 52) {
    animateNumber(1500, 2000, 900, altitueNum);
  } else if (newAltitueValue >= 52 && newAltitueValue < 56) {
    animateNumber(2000, 2500, 900, altitueNum);
  } else if (newAltitueValue >= 56 && newAltitueValue < 61) {
    animateNumber(2500, 3000, 900, altitueNum);
  }

  //地圖下方海拔數字滾動
  const altitueEnum = document.querySelector(".ALTITUEnum");
  const currentMarginTop = parseFloat(getComputedStyle(altitueEnum).marginTop);
  const currentMarginTopValue =
    (parseFloat(currentMarginTop) / viewportHeight) * 100;

  const newMarginTopValue = currentMarginTopValue + 2;

  altitueEnum.style.marginTop = `${newMarginTopValue}vh`;

  //人物跑動
  const personImage = document.querySelector("#personImage");

  personImage.src = "./img/fight/人物_走路.gif";

  setTimeout(function () {
    personImage.src = "./img/fight/背影.png";
  }, 1000);
});

//{{ Btn-逃跑 }}
let godownRunning = false;
document.querySelector(".Btn_back").addEventListener("click", function () {
  if (godownRunning) return;

  godownRunning = true;
  //山的滾動
  const bgElement = document.querySelector(".bg");
  const currentBottom = getComputedStyle(bgElement).bottom;

  const viewportHeight = window.innerHeight;
  const currentBottomValue = (parseFloat(currentBottom) / viewportHeight) * 100;

  const newBottomValue = currentBottomValue + 44;

  if (newBottomValue >= 0) {
    //反彈效果動畫
    bgElement.style.setProperty("--start-bottom", `${currentBottomValue}vh`);
    bgElement.style.animation = "bounce-back 1s ease-in-out";

    bgElement.addEventListener(
      "animationend",
      function () {
        bgElement.style.animation = "";
      },
      { once: true }
    );
  } else {
    bgElement.style.bottom = `${newBottomValue}vh`;
  }

  //瑪利歐的移動
  const marioPlace = document.querySelector(".mario");
  const currentPlace = getComputedStyle(marioPlace).bottom;

  const currentPlaceValue = (parseFloat(currentPlace) / viewportHeight) * 100;

  const newPlaceValue = currentPlaceValue - 4.3;

  if (newPlaceValue <= 30) {
    godownRunning = false;
    return;
  } else {
    marioPlace.style.bottom = `${newPlaceValue}vh`;
  }

  //海拔指標的移動
  const altitueVallue = document.querySelector(".altitue");
  const altitueNum = document.querySelector(".altitueNum");
  const currentAltitue = getComputedStyle(altitueVallue).bottom;

  const currentAltitueValue =
    (parseFloat(currentAltitue) / viewportHeight) * 100;

  const newAltitueValue = currentAltitueValue - 4.3;

  if (newAltitueValue >= 61) {
    return;
  } else {
    altitueVallue.style.bottom = `${newAltitueValue}vh`;
  }

  if (newAltitueValue < 38) {
    animateNumber(500, 50, 900, altitueNum);
    // (開始, 結束, 總時長ms, #altitueNum)
  } else if (newAltitueValue >= 38 && newAltitueValue < 43) {
    animateNumber(1000, 500, 900, altitueNum);
    $(".snake").css("bottom", "-32vh");
    $(".snake").css("z-index", "-1");
    console.log("-32");
  } else if (newAltitueValue >= 43 && newAltitueValue < 47) {
    animateNumber(1500, 1000, 900, altitueNum);
    $(".snake").css("bottom", "30vh");
    $(".snake").css("z-index", "4");
    console.log("30");
  } else if (newAltitueValue >= 47 && newAltitueValue < 51) {
    animateNumber(2000, 1500, 900, altitueNum);
  } else if (newAltitueValue >= 51 && newAltitueValue < 55) {
    animateNumber(2500, 2000, 900, altitueNum);
  } else if (newAltitueValue >= 55 && newAltitueValue < 61) {
    animateNumber(3000, 2500, 900, altitueNum);
  }

  //地圖下方海拔數字滾動
  const altitueEnum = document.querySelector(".ALTITUEnum");
  const currentMarginTop = parseFloat(getComputedStyle(altitueEnum).marginTop);
  const currentMarginTopValue =
    (parseFloat(currentMarginTop) / viewportHeight) * 100;

  const newMarginTopValue = currentMarginTopValue - 2;

  altitueEnum.style.marginTop = `${newMarginTopValue}vh`;

  //人物跑動
  const personImage = document.querySelector("#personImage");

  personImage.src = "./img/fight/人物_逃跑.gif";

  setTimeout(function () {
    personImage.src = "./img/fight/背影.png";
  }, 1000);
});

function animateNumber(start, end, duration, element) {
  let startTime = null;

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    const currentNumber = Math.round(start + (end - start) * progress);
    element.textContent = currentNumber;
    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      gotopRunning = false;
      godownRunning = false;
    }
  }

  requestAnimationFrame(step);
}

//Call out hamburger
$(".header_right").click(function () {
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

//{{ 文案 }}
//intro內容
var aText = new Array(
  "登山時可能會遇到野獸或是突發難以預料的狀況，那怎麼辦呢！？",
  "此處以海拔每500m為分界，將可能遇到情況結合成怪物，並附上相應的應急狀況",
  "登山前記得來熟悉一下備戰守則歐"
);

//毒蜇魔
var snake_info = new Array(
  "【怪物簡介】",
  "\u00A0\u00A0蛇與蜜蜂的亞種",
  "\u00A0\u00A0移動速度快，有劇毒，但攻擊性不高。", // \u00A0 = 不換行空格
  "\u00A0\u00A0危險指數\u00A0\u00A0★★★☆☆"
);

var snake_react = new Array(
  "【蜜蜂】:\u00A0遭遇到虎頭蜂時，運用衣物、樹葉等覆蓋在身上，減少裸露在外的區域，降低被螫的針數。奔跑時順著風跑，避免體味散發。",
  "【蛇】:\u00A0用手機拍下或是記住蛇的樣子，就醫時向醫師描述清楚。如果有出血，傷口位置低於心臟，減慢血液回流的速度。用止血帶止血時，不要綁死以免造成肢體其餘部位加速壞死。"
);

var snake_TMI = new Array(
  "【科普小知識】",
  "蛇：山野活動時帶一枝棍子，一路打草而行。蛇多半在草叢中出沒，不太會主動攻擊。",
  "蜜蜂：山區活動時，可能會因拉動樹枝而觸動蜂巢，因此不要隨意亂搖樹枝。"
);

var currentTextArray = aText; //默認顯示aText內容

var iSpeed = 70; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = currentTextArray[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines
var iTextPos = 0; // initialise text position
var sContents = ""; // initialise contents variable
var iRow; // initialise current row

var functionEnable = false;

function typewriter() {
  sContents = " ";
  iRow = Math.max(0, iIndex - iScrollAt);
  var destination = document.querySelector("#typeanimation");

  while (iRow < iIndex) {
    sContents += currentTextArray[iRow++] + "<br />";
  }
  if (currentTextArray[iIndex]) {
    destination.innerHTML =
      sContents + currentTextArray[iIndex].substring(0, iTextPos) + "";
    if (iTextPos++ == iArrLength) {
      iTextPos = 0;
      iIndex++;
      if (iIndex != currentTextArray.length) {
        iArrLength = currentTextArray[iIndex].length;
        setTimeout("typewriter()", 500);
      }
    } else {
      setTimeout("typewriter()", iSpeed);
    }
  }
}

//intro執行
document.querySelector("#fight-id").addEventListener("mouseover", function () {
  if (!functionEnable) {
    functionEnable = true;
    setTimeout(() => {
      typewriter();
    }, 700);
  }
});

//毒蜇魔
document.querySelector(".OptIntro").addEventListener("click", function () {
  currentTextArray = snake_info;
  iArrLength = currentTextArray[0].length;
  iIndex = 0;
  iTextPos = 0;
  iRow = 0;
  sContents = "";
  typewriter();
});
document.querySelector(".OptReact").addEventListener("click", function () {
  currentTextArray = snake_react;
  iArrLength = currentTextArray[0].length;
  iIndex = 0;
  iTextPos = 0;
  iRow = 0;
  sContents = "";
  typewriter();
});
document.querySelector(".OptTMI").addEventListener("click", function () {
  currentTextArray = snake_TMI;
  iArrLength = currentTextArray[0].length;
  iIndex = 0;
  iTextPos = 0;
  iRow = 0;
  sContents = "";
  typewriter();
});

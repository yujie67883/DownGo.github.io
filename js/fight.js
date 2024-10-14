// hint
window.onload = function () {
  var hintDiv = document.querySelector(".hint");

  var hintInterval = setInterval(function () {
    hintDiv.style.display = "block";
  }, 3000);

  var btnGo = document.querySelector(".Btn_go");
  btnGo.addEventListener("click", function () {
    hintDiv.style.display = "none";
    clearInterval(hintInterval);
  });
};

//{{ Btn-前進 }}
let gotopRunning = false;
document.querySelector(".Btn_go").addEventListener("click", function () {
  if (gotopRunning) return;

  document.querySelector(".aIntro img").style.opacity = "1";
  document.querySelector(".OptIntro").classList.add("active");

  gotopRunning = true;
  //山的滾動
  const bgElement = document.querySelector(".fightbg");
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
  const theCard = document.querySelector(".thecard");

  let backgroundImageSource = "../img/fight/card_snake.png";

  const currentAltitueValue =
    (parseFloat(currentAltitue) / viewportHeight) * 100;

  const newAltitueValue = currentAltitueValue + 4.3;

  if (newAltitueValue >= 61) {
    return;
  } else {
    altitueVallue.style.bottom = `${newAltitueValue}vh`;
  }

  if (newAltitueValue < 39) {
    //文案：500m以下不顯示任何怪物
    updateButtonContent(null);
    // 小地圖下方數字滾動(開始, 結束, 總時長ms, #altitueNum)
    animateNumber(50, 500, 900, altitueNum);
    backgroundImageSource = "./img/fight/card_none.png";

    //更新Option箭頭
    updateArrowVisibility();
    clearInterval(introArrowInterval);
    introArrow.style.opacity = "1";

    console.log("500m");
  } else if (newAltitueValue >= 39 && newAltitueValue < 43) {
    //文案：snake
    updateButtonContent("snake");
    animateNumber(500, 1000, 900, altitueNum);
    backgroundImageSource = "./img/fight/card_snake.png";
    rotateYdeg = 0;
    //蛇上來
    $(".wtsnake").css("bottom", "27vh");
    $(".wtsnake").css("z-index", "4");

    console.log("snake");
  } else if (newAltitueValue >= 43 && newAltitueValue < 48) {
    //文案：fish
    updateButtonContent("fish");
    animateNumber(1000, 1500, 900, altitueNum);
    backgroundImageSource = "./img/fight/card_fish.png";
    rotateYdeg = 180;
    //蛇下去
    $(".wtsnake").css("bottom", "-32vh");
    $(".wtsnake").css("z-index", "-1");
    //魚上來
    $(".wtfish").css("bottom", "9vh");
    $(".wtfish").css("z-index", "4");

    console.log("fish");
  } else if (newAltitueValue >= 48 && newAltitueValue < 52) {
    //文案：pig
    updateButtonContent("pig");
    animateNumber(1500, 2000, 900, altitueNum);
    backgroundImageSource = "./img/fight/card_pig.png";
    rotateYdeg = 0;
    //魚下去
    $(".wtfish").css("bottom", "-30vh");
    $(".wtfish").css("z-index", "-1");
    //豬上來
    $(".wtpig").css("bottom", "32vh");
    $(".wtpig").css("z-index", "4");

    console.log("pig");
  } else if (newAltitueValue >= 52 && newAltitueValue < 56) {
    //文案：hypoxia
    updateButtonContent("hypoxia");
    animateNumber(2000, 2500, 900, altitueNum);
    backgroundImageSource = "./img/fight/card_mtz.png";
    rotateYdeg = 180;
    //豬下去
    $(".wtpig").css("bottom", "-40vh");
    $(".wtpig").css("z-index", "-1");
    //缺氧上來
    $(".wthypoxia").css("bottom", "26vh");
    $(".wthypoxia").css("z-index", "4");

    console.log("hypoxia");
  } else if (newAltitueValue >= 56 && newAltitueValue < 61) {
    //文案：cold
    updateButtonContent("cold");
    animateNumber(2500, 3000, 900, altitueNum);
    backgroundImageSource = "./img/fight/card_cold.png";
    rotateYdeg = 0;
    //缺氧下去
    $(".wthypoxia").css("bottom", "-38vh");
    $(".wthypoxia").css("z-index", "-1");
    //寒冷上來
    $(".wtcold").css("bottom", "32vh");
    $(".wtcold").css("z-index", "4");

    console.log("cold");
  }

  //翻牌
  setTimeout(function () {
    theCard.style.backgroundImage = `url("${backgroundImageSource}")`;
    theCard.style.transform = `rotateY(${rotateYdeg}deg)`;
  }, 50);

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
  const bgElement = document.querySelector(".fightbg");
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
  const theCard = document.querySelector(".thecard");

  let backgroundImageSource = "../img/fight/card_snake.png";

  const currentAltitueValue =
    (parseFloat(currentAltitue) / viewportHeight) * 100;

  const newAltitueValue = currentAltitueValue - 4.3;

  if (newAltitueValue >= 61) {
    return;
  } else {
    altitueVallue.style.bottom = `${newAltitueValue}vh`;
  }

  if (newAltitueValue < 38) {
    //文案：50m以下不顯示任何怪物
    updateButtonContent(null);
    animateNumber(500, 50, 900, altitueNum);
    // (開始, 結束, 總時長ms, #altitueNum)
    backgroundImageSource = "./img/fight/card_none.png";

    console.log("50m");
  } else if (newAltitueValue >= 38 && newAltitueValue < 43) {
    //文案：500m以下不顯示任何怪物
    updateButtonContent(null);
    animateNumber(1000, 500, 900, altitueNum);
    backgroundImageSource = "./img/fight/card_none.png";
    rotateYdeg = 180;
    //蛇下去
    $(".wtsnake").css("bottom", "-32vh");
    $(".wtsnake").css("z-index", "0");
    console.log("500m");
  } else if (newAltitueValue >= 43 && newAltitueValue < 47) {
    //文案：snake
    updateButtonContent("snake");
    animateNumber(1500, 1000, 900, altitueNum);
    backgroundImageSource = "./img/fight/card_snake.png";
    rotateYdeg = 0;
    //魚下去
    $(".wtfish").css("bottom", "-30vh");
    $(".wtfish").css("z-index", "-1");
    //蛇上來
    $(".wtsnake").css("bottom", "27vh");
    $(".wtsnake").css("z-index", "4");

    console.log("snake");
  } else if (newAltitueValue >= 47 && newAltitueValue < 51) {
    //文案：fish
    updateButtonContent("fish");
    animateNumber(2000, 1500, 900, altitueNum);
    backgroundImageSource = "./img/fight/card_fish.png";
    rotateYdeg = 180;
    //豬下去
    $(".wtpig").css("bottom", "-40vh");
    $(".wtpig").css("z-index", "-1");
    //魚上來
    $(".wtfish").css("bottom", "9vh");
    $(".wtfish").css("z-index", "4");

    console.log("fish");
  } else if (newAltitueValue >= 51 && newAltitueValue < 55) {
    //文案：pig
    updateButtonContent("pig");
    animateNumber(2500, 2000, 900, altitueNum);
    backgroundImageSource = "./img/fight/card_pig.png";
    rotateYdeg = 0;
    //缺氧下去
    $(".wthypoxia").css("bottom", "-38vh");
    $(".wthypoxia").css("z-index", "-1");
    //豬上來
    $(".wtpig").css("bottom", "32vh");
    $(".wtpig").css("z-index", "4");

    console.log("pig");
  } else if (newAltitueValue >= 55 && newAltitueValue < 61) {
    //文案：hypoxia
    updateButtonContent("hypoxia");
    animateNumber(3000, 2500, 900, altitueNum);
    backgroundImageSource = "./img/fight/card_mtz.png";
    rotateYdeg = 180;
    //寒冷下去
    $(".wtcold").css("bottom", "-35vh");
    $(".wtcold").css("z-index", "-1");
    //缺氧上來
    $(".wthypoxia").css("bottom", "26vh");
    $(".wthypoxia").css("z-index", "4");

    console.log("hypoxia");
  }

  //翻牌
  setTimeout(function () {
    theCard.style.backgroundImage = `url("${backgroundImageSource}")`;
    theCard.style.transform = `rotateY(${rotateYdeg}deg)`;
  }, 50);

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
$("#mobile_burger").click(function () {
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
  "此處以海拔每500m為分界，將可能遇到情況結合成怪物，並附上相應的應急狀況。",
  "登山前記得來熟悉一下備戰守則歐～"
);
var empty = new Array("\u00A0");

//毒蜇魔文案
var snake_info = new Array(
  "【毒蜇魔】",
  "\u00A0\u00A0蛇與蜜蜂的亞種",
  "\u00A0\u00A0個性溫和攻擊性低，但破壞力高，較難防禦。", // \u00A0 = 不換行空格
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

//鐵支麵粉鯛文案
var fish_info = new Array(
  "【鐵支麵粉鯛】",
  "\u00A0\u00A0看似溫和，實則相當兇殘。",
  "\u00A0\u00A0危險指數\u00A0\u00A0★★★★★"
);

var fish_react = new Array(
  "【應急方式】",
  "遇溪水暴漲，被困岩石上或在沙洲中，應保持冷靜，等待救援，或尋找一些可助浮且耐沖擊的東西，萬一被水沖走時，可將物品置於身體下方，以免身體直接被撞傷。"
);

var fish_TMI = new Array(
  "【科普小知識】",
  "一旦溪水出現齊頭水（原本平靜的水面出現一波大面積、前方成一直線、等速前進的「齊頭水」）、水面混濁或水流加快，很可能便是溪水暴漲的前兆，一定要即刻離水。"
);

//相撲熊豬刃牙文案
var pig_info = new Array(
  "【相撲熊豬刃牙】",
  "\u00A0\u00A0熊豬出沒!!",
  "\u00A0\u00A0移動速度快，有劇毒，但攻擊性不高。",
  "\u00A0\u00A0危險指數\u00A0\u00A0★★★☆☆"
);

var pig_react = new Array(
  "【應急方式】",
  "保持冷靜，安靜並以正常速度離開，切勿奔跑，盡量讓自處於下風處，以面氣味讓野獸注意到。"
);

var pig_TMI = new Array(
  "【科普小知識】",
  "熊：體長130~180公分，最大的特徵便是胸前的黃白色V字形或新月形斑紋。主要分布於1,000至2,500公尺的中海拔林。",
  "野豬：廣泛分布在臺灣平地到海拔3km以上高山，偏好1km以下的低海拔山區，僅有山區及周圍丘陵，才有牠們的蹤跡。"
);

//高山絕氧獸文案
var hypoxia_info = new Array(
  "【高山絕氧獸】",
  "\u00A0\u00A0高山症是在高海拔地區，由於缺氧所引起的身體反應。",
  "\u00A0\u00A0長相不起眼容易讓人忽視，偶有幾隻攻擊性特別高。",
  "\u00A0\u00A0危險指數\u00A0\u00A0★★★★☆"
);

var hypoxia_react = new Array(
  "【應急方式】",
  "1.立即下降高度：急性高山症100~200公尺、肺水腫及腦水腫下降1000公尺。",
  "2.供給氧氣和加壓帶：利用氧氣筒或攜帶型加壓帶（PAC）加壓10分鐘減少壓力。",
  "3.使用藥物應急：常見有乙型交感神經劑(常見氣喘用藥之一)與類固醇，有分口服、針劑、吸入等類型。"
);

var hypoxia_TMI = new Array(
  "【科普小知識--高山症分類與症狀】",
  "急性高山症：頭暈、頭痛、噁心、嘔吐、失眠。",
  "高山肺水腫：乾咳、痰中帶血、休息時也喘氣。可用犀利士、威而鋼、鈣離子阻斷劑等藥物應急。",
  "高山腦水腫：神智不清、答非所問、走路不穩。常用類固醇、丹木斯(Diamox)等藥。"
);

//凝寒失溫龍文案
var cold_info = new Array(
  "【凝寒失溫龍】",
  "\u00A0\u00A0攻擊力高、數量稀少，僅出現在特定區域。",
  "\u00A0\u00A0危險指數\u00A0\u00A0★★★★☆",
  "\u00A0\u00A0在高山區域，低氣溫、風寒、濕冷、保暖不足等都是可能導致失溫的原因。"
);

var cold_react = new Array(
  "【應急方式】",
  "1.用黑色塑膠垃圾袋或毛毯包住身體，在裡面點蠟燭",
  "2.將熱水瓶、暖暖包等放在頸、胸等中樞部位",
  "3.升營火",
  "4.補充熱食、食物、喝溫熱水"
);

var cold_TMI = new Array(
  "【科普小知識--失溫程度分級】",
  "第一級：病人意識清楚，顫抖症狀，體溫仍在32度以上",
  "第二級：病人開始意識模糊，顫抖停止，體溫介於28～32度之間",
  "第三級：病人已失去意識，體溫介於24～28度之間",
  "第四級：病人已休克昏迷，體溫約介於13.7～24度間",
  "第五級：死亡，體溫低於13.7度"
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

//簡介、應急、小知識
function updateButtonContent(monster) {
  let introContent, reactContent, tmiContent;

  let reactArrowInterval, tmiArrowInterval, introArrowInterval;

  switch (monster) {
    case "snake":
      introContent = snake_info;
      reactContent = snake_react;
      tmiContent = snake_TMI;
      break;
    case "fish":
      introContent = fish_info;
      reactContent = fish_react;
      tmiContent = fish_TMI;
      break;
    case "pig":
      introContent = pig_info;
      reactContent = pig_react;
      tmiContent = pig_TMI;
      break;
    case "hypoxia":
      introContent = hypoxia_info;
      reactContent = hypoxia_react;
      tmiContent = hypoxia_TMI;
      break;
    case "cold":
      introContent = cold_info;
      reactContent = cold_react;
      tmiContent = cold_TMI;
      break;
    default:
      // 沒有怪物時，放置intro內容
      introContent = aText;
      reactContent = aText;
      tmiContent = aText;
  }

  // 重置所有選項的 active 状态
  function resetActiveState() {
    document.querySelector(".OptIntro").classList.remove("active");
    document.querySelector(".OptReact").classList.remove("active");
    document.querySelector(".OptTMI").classList.remove("active");
  }

  // 重置打字機效果
  function resetTypewriter() {
    iArrLength = currentTextArray[0] ? currentTextArray[0].length : 0;
    iIndex = 0;
    iTextPos = 0;
    iRow = 0;
    sContents = "";
    typewriter();
  }

  // 箭頭顯示狀態
  const optIntro = document.querySelector(".OptIntro");
  const optReact = document.querySelector(".OptReact");
  const optTMI = document.querySelector(".OptTMI");
  const introArrow = optIntro.querySelector(".aIntro img");
  const reactArrow = optReact.querySelector(".aReact img");
  const tmiArrow = optTMI.querySelector(".aTMI img");

  // 更新箭頭顯示狀態
  function updateArrowVisibility() {
    const isIntroActive = optIntro.classList.contains("active");
    const isReactActive = optReact.classList.contains("active");
    const isTmiActive = optTMI.classList.contains("active");

    introArrow.style.opacity = isIntroActive ? "1" : "0";
    reactArrow.style.opacity = isReactActive ? "1" : "0";
    tmiArrow.style.opacity = isTmiActive ? "1" : "0";
  }

  optReact.addEventListener("mouseenter", toggleArrowVisibility);
  optReact.addEventListener("mouseleave", toggleArrowVisibility);

  // 當hover到應急，【簡介】隱藏
  function toggleArrowVisibility(event) {
    if (event.type === "mouseenter") {
      if (optIntro.classList.contains("active")) {
        introArrow.style.opacity = "0";
        reactArrow.style.opacity = "1";

        // let isVisible = true;
        // reactArrowInterval = setInterval(() => {
        //   reactArrow.style.opacity = isVisible ? "1" : "0";
        //   isVisible = !isVisible;
        // }, 500);
      }
    } else if (event.type === "mouseleave") {
      if (optIntro.classList.contains("active")) {
        introArrow.style.opacity = "1";

        clearInterval(reactArrowInterval);
        reactArrow.style.opacity = "0";
        tmiArrow.style.opacity = "0";
      }
    }
  }

  // 當hover到科普，【簡介】隱藏
  optTMI.addEventListener("mouseenter", () => {
    if (optIntro.classList.contains("active")) {
      introArrow.style.opacity = "0";
      tmiArrow.style.opacity = "1";

      // let isVisible = true;
      // tmiArrowInterval = setInterval(() => {
      //   tmiArrow.style.opacity = isVisible ? "1" : "0";
      //   isVisible = !isVisible;
      // }, 500);
    }
  });

  optTMI.addEventListener("mouseleave", () => {
    if (optIntro.classList.contains("active")) {
      introArrow.style.opacity = "1";

      clearInterval(tmiArrowInterval);
      tmiArrow.style.opacity = "0";
    }
  });

  // 當hover到簡介，【應急】隱藏
  optIntro.addEventListener("mouseenter", () => {
    if (optReact.classList.contains("active")) {
      reactArrow.style.opacity = "0";
      introArrow.style.opacity = "1";

      // let isVisible = true;
      // introArrowInterval = setInterval(() => {
      //   introArrow.style.opacity = isVisible ? "1" : "0";
      //   isVisible = !isVisible;
      // }, 500);
    }
  });

  optIntro.addEventListener("mouseleave", () => {
    if (optReact.classList.contains("active")) {
      reactArrow.style.opacity = "1";

      clearInterval(introArrowInterval);
      introArrow.style.opacity = "0";
    }
  });

  // 當hover到科普，【應急】隱藏
  optTMI.addEventListener("mouseenter", () => {
    if (optReact.classList.contains("active")) {
      reactArrow.style.opacity = "0";
      tmiArrow.style.opacity = "1";

      // let isVisible = true;
      // tmiArrowInterval = setInterval(() => {
      //   tmiArrow.style.opacity = isVisible ? "1" : "0";
      //   isVisible = !isVisible;
      // }, 500);
    }
  });

  optTMI.addEventListener("mouseleave", () => {
    if (optReact.classList.contains("active")) {
      reactArrow.style.opacity = "1";

      clearInterval(tmiArrowInterval);
      tmiArrow.style.opacity = "0";
    }
  });

  // 當hover到簡介，【科普】隱藏
  optIntro.addEventListener("mouseenter", () => {
    if (optTMI.classList.contains("active")) {
      tmiArrow.style.opacity = "0";
      introArrow.style.opacity = "1";

      // let isVisible = true;
      // introArrowInterval = setInterval(() => {
      //   introArrow.style.opacity = isVisible ? "1" : "0";
      //   isVisible = !isVisible;
      // }, 500);
    }
  });

  optIntro.addEventListener("mouseleave", () => {
    if (optTMI.classList.contains("active")) {
      tmiArrow.style.opacity = "1";

      clearInterval(introArrowInterval);
      introArrow.style.opacity = "0";
    }
  });

  // 當hover到應急，【科普】隱藏
  optReact.addEventListener("mouseenter", () => {
    if (optTMI.classList.contains("active")) {
      tmiArrow.style.opacity = "0";
      reactArrow.style.opacity = "1";

      // let isVisible = true;
      // reactArrowInterval = setInterval(() => {
      //   reactArrow.style.opacity = isVisible ? "1" : "0";
      //   isVisible = !isVisible;
      // }, 500);
    }
  });

  optReact.addEventListener("mouseleave", () => {
    if (optTMI.classList.contains("active")) {
      tmiArrow.style.opacity = "1";

      clearInterval(reactArrowInterval);
      reactArrow.style.opacity = "0";
    }
  });

  // 添加一個重置所有箭頭狀態的函數
  function resetArrowStates() {
    clearInterval(introArrowInterval);
    clearInterval(reactArrowInterval);
    clearInterval(tmiArrowInterval);

    introArrow.style.opacity = "0";
    reactArrow.style.opacity = "0";
    tmiArrow.style.opacity = "0";
  }

  // 簡介、應急、科普 click + active
  document.querySelector(".OptIntro").onclick = function () {
    resetActiveState();
    this.classList.add("active");
    updateArrowVisibility();

    // 重置箭頭狀態
    resetArrowStates();
    introArrow.style.opacity = "1";
    console.log("introstop");

    currentTextArray = introContent;
    resetTypewriter();
  };

  document.querySelector(".OptReact").onclick = function () {
    resetActiveState();
    this.classList.add("active");
    updateArrowVisibility();

    // 重置箭頭狀態
    resetArrowStates();
    reactArrow.style.opacity = "1";
    console.log("reactstop");

    currentTextArray = reactContent;
    resetTypewriter();
    updateArrowVisibility();
  };

  document.querySelector(".OptTMI").onclick = function () {
    resetActiveState();
    this.classList.add("active");

    // 重置箭頭狀態
    resetArrowStates();
    tmiArrow.style.opacity = "1";
    console.log("tmistop");

    currentTextArray = tmiContent;
    resetTypewriter();
    updateArrowVisibility();
  };

  document.querySelector(".Btn_go").onclick = function () {
    resetActiveState();
    optIntro.classList.add("active");
    updateArrowVisibility();

    // 重置箭頭狀態
    resetArrowStates();
    introArrow.style.opacity = "1"; // 確保顯示
    console.log("gostop");

    currentTextArray = introContent;
    resetTypewriter();
  };

  document.querySelector(".Btn_back").onclick = function () {
    resetActiveState();
    optIntro.classList.add("active");
    updateArrowVisibility();

    // 重置箭頭狀態
    resetArrowStates();
    introArrow.style.opacity = "1"; // 確保顯示
    console.log("gostop");

    currentTextArray = introContent;
    resetTypewriter();
  };
}

// --------------------------- 手機版js ----------------------------

const mediaQuery = window.matchMedia("(max-width: 540px)");

if (mediaQuery.matches) {
  //mobile打字機範圍
  function mbtypewriter() {
    sContents = " ";
    iRow = Math.max(0, iIndex - iScrollAt);
    var destination = document.querySelector("#mbtypeanimation");

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
          setTimeout("mbtypewriter()", 500);
        }
      } else {
        setTimeout("mbtypewriter()", iSpeed);
      }
    }
  }

  // 重置打字機效果
  function resetTypewriter() {
    iArrLength = currentTextArray[0] ? currentTextArray[0].length : 0;
    iIndex = 0;
    iTextPos = 0;
    iRow = 0;
    sContents = "";
    mbtypewriter();
  }

  //intro執行
  const mediaQuery = window.matchMedia("(max-width: 540px)");

  function handleMediaChange(e) {
    if (e.matches) {
      currentTextArray = aText;
      mbtypewriter();
    }
  }

  // 監聽裝置寬度變化
  mediaQuery.addEventListener("change", handleMediaChange);

  // 頁面載入時立即檢查是否符合條件
  if (mediaQuery.matches) {
    currentTextArray = aText;
    mbtypewriter(); // 立即執行打字效果
  }

  //{{ Btn-前進 }}
  document.querySelector(".mbbtn_go").addEventListener("click", function () {
    //山的滾動
    const bgElement = document.querySelector(".mbmt");
    const currentBottom = getComputedStyle(bgElement).bottom;

    const viewportHeight = window.innerHeight;
    const currentBottomValue =
      (parseFloat(currentBottom) / viewportHeight) * 100;

    const newBottomValue = currentBottomValue - 17;

    if (newBottomValue < -42) {
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

    if (newBottomValue < -42) {
      return;
    } else {
      bgElement.style.bottom = `${newBottomValue}vh`;
    }

    if (newBottomValue > 26) {
      //文案：500m以下不顯示任何怪物
      updateButtonContent(null);
      // 小地圖下方數字滾動(開始, 結束, 總時長ms, #altitueNum)
      animateNumber(50, 500, 900, altitueNum);
      backgroundImageSource = "./img/fight/card_none.png";

      //更新Option箭頭
      updateArrowVisibility();
      clearInterval(introArrowInterval);
      introArrow.style.opacity = "1";

      console.log("500m");
    } else if (newBottomValue <= 26 && newBottomValue > 9) {
      //文案：snake
      updateButtonContent("snake");
      animateNumber(500, 1000, 900, altitueNum);
      backgroundImageSource = "./img/fight/card_snake.png";
      rotateYdeg = 0;
      //蛇上來
      $(".wtsnake").css("bottom", "62vh");
      $(".wtsnake").css("z-index", "3");

      console.log("snake");
    } else if (newBottomValue <= 9 && newBottomValue > -8) {
      //文案：fish
      updateButtonContent("fish");
      animateNumber(1000, 1500, 900, altitueNum);
      backgroundImageSource = "./img/fight/card_fish.png";
      rotateYdeg = 180;
      //蛇下去
      $(".wtsnake").css("bottom", "34vh");
      $(".wtsnake").css("z-index", "-1");
      //魚上來
      $(".wtfish").css("bottom", "56vh");
      $(".wtfish").css("z-index", "3");

      console.log("fish");
    } else if (newBottomValue <= -7 && newBottomValue > -25) {
      //文案：pig
      updateButtonContent("pig");
      animateNumber(1500, 2000, 900, altitueNum);
      backgroundImageSource = "./img/fight/card_pig.png";
      rotateYdeg = 0;
      //魚下去
      $(".wtfish").css("bottom", "36vh");
      $(".wtfish").css("z-index", "-1");
      //豬上來
      $(".wtpig").css("bottom", "62vh");
      $(".wtpig").css("z-index", "3");

      console.log("pig");
    } else if (newBottomValue <= -25 && newBottomValue > -42) {
      //文案：hypoxia
      updateButtonContent("hypoxia");
      animateNumber(2000, 2500, 900, altitueNum);
      backgroundImageSource = "./img/fight/card_mtz.png";
      rotateYdeg = 180;
      //豬下去
      $(".wtpig").css("bottom", "35vh");
      $(".wtpig").css("z-index", "-1");
      //缺氧上來
      $(".wthypoxia").css("bottom", "61vh");
      $(".wthypoxia").css("z-index", "3");

      console.log("hypoxia");
    } else if (newBottomValue <= -42 && newBottomValue > -50) {
      //文案：cold
      updateButtonContent("cold");
      animateNumber(2500, 3000, 900, altitueNum);
      backgroundImageSource = "./img/fight/card_cold.png";
      rotateYdeg = 0;
      //缺氧下去
      $(".wthypoxia").css("bottom", "35vh");
      $(".wthypoxia").css("z-index", "-1");
      //寒冷上來
      $(".wtcold").css("bottom", "63vh");
      $(".wtcold").css("z-index", "3");

      console.log("cold");
    }

    //人物跑動
    const personImage = document.querySelector("#mbPersonImage");

    personImage.src = "./img/fight/人物_走路.gif";

    setTimeout(function () {
      personImage.src = "./img/fight/背影.png";
    }, 1000);
  });

  //{{ Btn-後退 }}
  document.querySelector(".mbbtn_back").addEventListener("click", function () {
    //山的滾動
    const bgElement = document.querySelector(".mbmt");
    const currentBottom = getComputedStyle(bgElement).bottom;

    const viewportHeight = window.innerHeight;
    const currentBottomValue =
      (parseFloat(currentBottom) / viewportHeight) * 100;

    const newBottomValue = currentBottomValue + 17;

    if (newBottomValue > 48) {
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

    if (newBottomValue > 43) {
      return;
    } else {
      bgElement.style.bottom = `${newBottomValue}vh`;
    }

    if (newBottomValue > 26 && newBottomValue <= 43) {
      //文案：500m以下不顯示任何怪物
      updateButtonContent(null);
      animateNumber(1000, 500, 900, altitueNum);
      backgroundImageSource = "./img/fight/card_none.png";
      rotateYdeg = 180;
      //蛇下去
      $(".wtsnake").css("bottom", "34vh");
      $(".wtsnake").css("z-index", "1");
      console.log("500m");
    } else if (newBottomValue > 9 && newBottomValue <= 27) {
      //文案：snake
      updateButtonContent("snake");
      animateNumber(1500, 1000, 900, altitueNum);
      backgroundImageSource = "./img/fight/card_snake.png";
      rotateYdeg = 0;
      //魚下去
      $(".wtfish").css("bottom", "36vh");
      $(".wtfish").css("z-index", "-1");
      //蛇上來
      $(".wtsnake").css("bottom", "62vh");
      $(".wtsnake").css("z-index", "3");

      console.log("snake");
    } else if (newBottomValue > -8 && newBottomValue <= 9) {
      //文案：fish
      updateButtonContent("fish");
      animateNumber(2000, 1500, 900, altitueNum);
      backgroundImageSource = "./img/fight/card_fish.png";
      rotateYdeg = 180;
      //豬下去
      $(".wtpig").css("bottom", "35vh");
      $(".wtpig").css("z-index", "-1");
      //魚上來
      $(".wtfish").css("bottom", "56vh");
      $(".wtfish").css("z-index", "3");

      console.log("fish");
    } else if (newBottomValue > -25 && newBottomValue <= -8) {
      //文案：pig
      updateButtonContent("pig");
      animateNumber(2500, 2000, 900, altitueNum);
      backgroundImageSource = "./img/fight/card_pig.png";
      rotateYdeg = 0;
      //缺氧下去
      $(".wthypoxia").css("bottom", "35vh");
      $(".wthypoxia").css("z-index", "-1");
      //豬上來
      $(".wtpig").css("bottom", "62vh");
      $(".wtpig").css("z-index", "3");

      console.log("pig");
    } else if (newBottomValue > -42 && newBottomValue <= -25) {
      //文案：hypoxia
      updateButtonContent("hypoxia");
      animateNumber(3000, 2500, 900, altitueNum);
      backgroundImageSource = "./img/fight/card_mtz.png";
      rotateYdeg = 180;
      //寒冷下去
      $(".wtcold").css("bottom", "27vh");
      $(".wtcold").css("z-index", "-1");
      //缺氧上來
      $(".wthypoxia").css("bottom", "61vh");
      $(".wthypoxia").css("z-index", "3");

      console.log("hypoxia");
    }

    //人物跑動
    const personImage = document.querySelector("#mbPersonImage");

    personImage.src = "./img/fight/人物_逃跑.gif";

    setTimeout(function () {
      personImage.src = "./img/fight/背影.png";
    }, 1000);
  });

  //簡介、應急、小知識
  function updateButtonContent(monster) {
    let introContent, reactContent, tmiContent;

    switch (monster) {
      case "snake":
        introContent = snake_info;
        reactContent = snake_react;
        tmiContent = snake_TMI;
        break;
      case "fish":
        introContent = fish_info;
        reactContent = fish_react;
        tmiContent = fish_TMI;
        break;
      case "pig":
        introContent = pig_info;
        reactContent = pig_react;
        tmiContent = pig_TMI;
        break;
      case "hypoxia":
        introContent = hypoxia_info;
        reactContent = hypoxia_react;
        tmiContent = hypoxia_TMI;
        break;
      case "cold":
        introContent = cold_info;
        reactContent = cold_react;
        tmiContent = cold_TMI;
        break;
      default:
        // 沒有怪物時，放置intro內容
        introContent = aText;
        reactContent = aText;
        tmiContent = aText;
    }

    // 重置打字機效果
    function resetTypewriter() {
      iArrLength = currentTextArray[0] ? currentTextArray[0].length : 0;
      iIndex = 0;
      iTextPos = 0;
      iRow = 0;
      sContents = "";
      mbtypewriter();
    }

    const mbbox = document.querySelector(".mbbox");

    // 簡介、應急、科普 click
    document.querySelector(".mb_info").onclick = function () {
      mbbox.style.backgroundImage = "url(./img/fight/mobile/mbbox_info.png)";
      currentTextArray = introContent;
      resetTypewriter();
      typeanContent.style.top = `0vh`;
      updateTypeanPosition();
    };

    document.querySelector(".mb_react").onclick = function () {
      mbbox.style.backgroundImage = "url(./img/fight/mobile/mbbox_react.png)";
      currentTextArray = reactContent;
      resetTypewriter();
      typeanContent.style.top = `0vh`;
      updateTypeanPosition();
    };

    document.querySelector(".mb_tmi").onclick = function () {
      mbbox.style.backgroundImage = "url(./img/fight/mobile/mbbox_tmi.png)";
      currentTextArray = tmiContent;
      resetTypewriter();
      typeanContent.style.top = `0vh`;
      updateTypeanPosition();
    };

    document.querySelector(".mbbtn_go").onclick = function () {
      mbbox.style.backgroundImage = "url(./img/fight/mobile/mbbox_info.png)";
      currentTextArray = introContent;
      resetTypewriter();
      typeanContent.style.top = `0vh`;
      updateTypeanPosition();
    };

    document.querySelector(".mbbtn_back").onclick = function () {
      mbbox.style.backgroundImage = "url(./img/fight/mobile/mbbox_info.png)";
      currentTextArray = introContent;
      resetTypewriter();
      typeanContent.style.top = `0vh`;
      updateTypeanPosition();
    };

    //字幕超過字框時的滑動效果
    const typeanContent = document.querySelector(".typean_content");

    function updateTypeanPosition() {
      // 只有當 .typean_content 的高度超過 12.5vh 時才調整位置
      const currentHeight =
        (typeanContent.offsetHeight / window.innerHeight) * 100;
      if (currentHeight > 12.5) {
        const currentLength = typeanContent.textContent.length;

        // 根據每40個字來計算應該上移的值
        const numberOfLines = Math.floor(currentLength / 40);
        typeanContent.style.top = `${-2 * numberOfLines}vh`;
      }
    }

    const observer = new MutationObserver(updateTypeanPosition);

    observer.observe(typeanContent, {
      childList: true,
      characterData: true,
      subtree: true,
    });

    updateTypeanPosition();

    //內文可以滑動
    const typeanContents = document.querySelector(".typean_content");
    let startY;

    typeanContents.addEventListener("touchstart", (e) => {
      startY = e.touches[0].clientY;
    });

    typeanContents.addEventListener("touchmove", (e) => {
      const currentY = e.touches[0].clientY;
      const deltaY = currentY - startY;

      let newTop =
        parseFloat(typeanContents.style.top) +
        (deltaY / window.innerHeight) * 100;

      if (newTop > 0) {
        newTop = 0;
      } else if (newTop < -6) {
        newTop = -6;
      }

      typeanContents.style.top = `${newTop}vh`;
      startY = currentY;
    });
  }
}

// 跳轉小青蛙 to Shop / to Membership
const btnShop = document.getElementById("toshop");
const btnMember = document.getElementById("tomember");
const btnPurchase = document.getElementById("topurcahse");
const btnLogin = document.getElementById("tologin");
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

document.getElementById("human").addEventListener("click", function () {
  document.getElementsByClassName("first-content")[0].classList.add("active");
  document.getElementsByClassName("second-content")[0].classList.add("active");
});
document.getElementById("whole-human").addEventListener("click", function () {
  document
    .getElementsByClassName("first-content")[0]
    .classList.remove("active");
  document
    .getElementsByClassName("second-content")[0]
    .classList.remove("active");
});

var aText = new Array(
  "早安冒險者！",
  "真是美好的一天！",
  "我是大南部史_",
  "學會自行緊急包紮是作為一名冒險家必備的技能_",
  "想必你會需要一個傷痕累累的人吧_",
  "就在剛剛我已經將自己調整成需要包紮的體態了_",
  "這邊就由我來為你一步一步地進行實作包紮ㄅ_",
  " ",
  "點擊大南部史進行演練"
);
var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ""; // initialise contents variable
var iRow; // initialise current row

function typewriter() {
  sContents = " ";
  iRow = Math.max(0, iIndex - iScrollAt);
  var destination = document.getElementById("typeanimation");

  while (iRow < iIndex) {
    sContents += aText[iRow++] + "<br />";
  }
  destination.innerHTML =
    sContents + aText[iIndex].substring(0, iTextPos) + "_";
  if (iTextPos++ == iArrLength) {
    iTextPos = 0;
    iIndex++;
    if (iIndex != aText.length) {
      iArrLength = aText[iIndex].length;
      setTimeout("typewriter()", 500);
    }
  } else {
    setTimeout("typewriter()", iSpeed);
  }
}
typewriter();

// 環形包紮
document.getElementById("cycle").addEventListener("click", function () {
  document.getElementsByClassName("cycle-frame")[0].classList.add("active");
  document.getElementsByClassName("cycle-book")[0].classList.add("active");
  document.getElementsByClassName("bookbackground")[0].classList.add("active");
  var img = document.getElementById("cycle-book");
  img.src = "img/hurt/書_翻開.gif";
  if (
    !document
      .getElementsByClassName("cycle-hint2")[0]
      .classList.contains("active") &&
    !document
      .getElementsByClassName("cycle-hint3")[0]
      .classList.contains("active")
  ) {
    setTimeout(() => {
      document.getElementsByClassName("cycle-hint1")[0].classList.add("active");
    }, 1800);
  }
});
document.getElementById("cycle-return").addEventListener("click", function () {
  var img = document.getElementById("cycle-gif");
  img.src = "img/hurt/環形包紮手.png";
  document.getElementsByClassName("cycle-return")[0].classList.remove("active");
  setTimeout(() => {
    document.getElementsByClassName("cycle-hint1")[0].classList.add("active");
  }, 800);
});
document.getElementById("cycle-hint1").addEventListener("click", function () {
  var img = document.getElementById("cycle-gif");
  img.src = "img/hurt/環形包紮1.gif";
  document.getElementsByClassName("cycle-hint1")[0].classList.remove("active");
  setTimeout(() => {
    document.getElementsByClassName("cycle-hint2")[0].classList.add("active");
  }, 1500);
});
document.getElementById("cycle-hint2").addEventListener("click", function () {
  var img = document.getElementById("cycle-gif");
  img.src = "img/hurt/環形包紮2.gif";
  document.getElementsByClassName("cycle-hint2")[0].classList.remove("active");
  setTimeout(() => {
    document.getElementsByClassName("cycle-hint3")[0].classList.add("active");
  }, 1500);
});
document.getElementById("cycle-hint3").addEventListener("click", function () {
  var img = document.getElementById("cycle-gif");
  img.src = "img/hurt/環形包紮3.gif";
  document.getElementsByClassName("cycle-hint3")[0].classList.remove("active");
  setTimeout(() => {
    document.getElementsByClassName("cycle-return")[0].classList.add("active");
  }, 1500);
});
document.getElementById("cycle-x").addEventListener("click", function () {
  document.getElementsByClassName("cycle-frame")[0].classList.remove("active");
  document.getElementsByClassName("cycle-return")[0].classList.remove("active");
  var img = document.getElementById("cycle-book");
  img.src = "img/hurt/書_闔上.gif";
  if (
    !document
      .getElementsByClassName("cycle-hint2")[0]
      .classList.contains("active") &&
    !document
      .getElementsByClassName("cycle-hint3")[0]
      .classList.contains("active")
  ) {
    var img = document.getElementById("cycle-gif");
    img.src = "img/hurt/環形包紮手.png";
  }
  setTimeout(() => {
    document.getElementsByClassName("cycle-book")[0].classList.remove("active");
    document
      .getElementsByClassName("bookbackground")[0]
      .classList.remove("active");
  }, 1300);
});

// 回反包紮
document.getElementById("return").addEventListener("click", function () {
  document.getElementsByClassName("return-frame")[0].classList.add("active");
  document.getElementsByClassName("return-book")[0].classList.add("active");
  document.getElementsByClassName("bookbackground")[0].classList.add("active");
  var img = document.getElementById("return-book");
  img.src = "img/hurt/書_翻開.gif";
  if (
    !document
      .getElementsByClassName("return-hint2")[0]
      .classList.contains("active") &&
    !document
      .getElementsByClassName("return-hint3")[0]
      .classList.contains("active") &&
    !document
      .getElementsByClassName("return-hint4")[0]
      .classList.contains("active")
  ) {
    setTimeout(() => {
      document
        .getElementsByClassName("return-hint1")[0]
        .classList.add("active");
    }, 1800);
  }
});
document.getElementById("return-return").addEventListener("click", function () {
  var img = document.getElementById("return-gif");
  img.src = "img/hurt/回反包紮手.png";
  document
    .getElementsByClassName("return-return")[0]
    .classList.remove("active");
  setTimeout(() => {
    document.getElementsByClassName("return-hint1")[0].classList.add("active");
  }, 800);
});
document.getElementById("return-hint1").addEventListener("click", function () {
  var img = document.getElementById("return-gif");
  img.src = "img/hurt/回反包紮1.gif";
  document.getElementsByClassName("return-hint1")[0].classList.remove("active");
  setTimeout(() => {
    document.getElementsByClassName("return-hint2")[0].classList.add("active");
  }, 1500);
});
document.getElementById("return-hint2").addEventListener("click", function () {
  var img = document.getElementById("return-gif");
  img.src = "img/hurt/回反包紮2.gif";
  document.getElementsByClassName("return-hint2")[0].classList.remove("active");
  setTimeout(() => {
    document.getElementsByClassName("return-hint3")[0].classList.add("active");
  }, 1500);
});
document.getElementById("return-hint3").addEventListener("click", function () {
  var img = document.getElementById("return-gif");
  img.src = "img/hurt/回反包紮3.gif";
  document.getElementsByClassName("return-hint3")[0].classList.remove("active");
  setTimeout(() => {
    document.getElementsByClassName("return-hint4")[0].classList.add("active");
  }, 1500);
});
document.getElementById("return-hint4").addEventListener("click", function () {
  var img = document.getElementById("return-gif");
  img.src = "img/hurt/回反包紮4.gif";
  document.getElementsByClassName("return-hint4")[0].classList.remove("active");
  setTimeout(() => {
    document.getElementsByClassName("return-return")[0].classList.add("active");
  }, 1500);
});
document.getElementById("return-x").addEventListener("click", function () {
  document.getElementsByClassName("return-frame")[0].classList.remove("active");
  document
    .getElementsByClassName("return-return")[0]
    .classList.remove("active");
  var img = document.getElementById("return-book");
  img.src = "img/hurt/書_闔上.gif";
  if (
    !document
      .getElementsByClassName("return-hint2")[0]
      .classList.contains("active") &&
    !document
      .getElementsByClassName("return-hint3")[0]
      .classList.contains("active") &&
    !document
      .getElementsByClassName("return-hint4")[0]
      .classList.contains("active")
  ) {
    var img = document.getElementById("return-gif");
    img.src = "img/hurt/回反包紮手.png";
  }
  setTimeout(() => {
    document
      .getElementsByClassName("return-book")[0]
      .classList.remove("active");
    document
      .getElementsByClassName("bookbackground")[0]
      .classList.remove("active");
  }, 1300);
});

// 螺旋回反包紮
document.getElementById("spinreturn").addEventListener("click", function () {
  document
    .getElementsByClassName("spinreturn-frame")[0]
    .classList.add("active");
  document.getElementsByClassName("spinreturn-book")[0].classList.add("active");
  document.getElementsByClassName("bookbackground")[0].classList.add("active");
  var img = document.getElementById("spinreturn-book");
  img.src = "img/hurt/書_翻開.gif";
  if (
    !document
      .getElementsByClassName("spinreturn-hint2")[0]
      .classList.contains("active") &&
    !document
      .getElementsByClassName("spinreturn-hint3")[0]
      .classList.contains("active")
  ) {
    setTimeout(() => {
      document
        .getElementsByClassName("spinreturn-hint1")[0]
        .classList.add("active");
    }, 1800);
  }
});
document
  .getElementById("spinreturn-return")
  .addEventListener("click", function () {
    var img = document.getElementById("spinreturn-gif");
    img.src = "img/hurt/螺旋反折手.png";
    document
      .getElementsByClassName("spinreturn-return")[0]
      .classList.remove("active");
    setTimeout(() => {
      document
        .getElementsByClassName("spinreturn-hint1")[0]
        .classList.add("active");
    }, 800);
  });
document
  .getElementById("spinreturn-hint1")
  .addEventListener("click", function () {
    var img = document.getElementById("spinreturn-gif");
    img.src = "img/hurt/螺旋反折1.gif";
    document
      .getElementsByClassName("spinreturn-hint1")[0]
      .classList.remove("active");
    setTimeout(() => {
      document
        .getElementsByClassName("spinreturn-hint2")[0]
        .classList.add("active");
    }, 1500);
  });
document
  .getElementById("spinreturn-hint2")
  .addEventListener("click", function () {
    var img = document.getElementById("spinreturn-gif");
    img.src = "img/hurt/螺旋反折2.gif";
    document
      .getElementsByClassName("spinreturn-hint2")[0]
      .classList.remove("active");
    setTimeout(() => {
      document
        .getElementsByClassName("spinreturn-hint3")[0]
        .classList.add("active");
    }, 1500);
  });
document
  .getElementById("spinreturn-hint3")
  .addEventListener("click", function () {
    var img = document.getElementById("spinreturn-gif");
    img.src = "img/hurt/螺旋反折3.gif";
    document
      .getElementsByClassName("spinreturn-hint3")[0]
      .classList.remove("active");
    setTimeout(() => {
      document
        .getElementsByClassName("spinreturn-return")[0]
        .classList.add("active");
    }, 1500);
  });
document.getElementById("spinreturn-x").addEventListener("click", function () {
  document
    .getElementsByClassName("spinreturn-frame")[0]
    .classList.remove("active");
  document
    .getElementsByClassName("spinreturn-return")[0]
    .classList.remove("active");
  var img = document.getElementById("spinreturn-book");
  img.src = "img/hurt/書_闔上.gif";
  if (
    !document
      .getElementsByClassName("spinreturn-hint2")[0]
      .classList.contains("active") &&
    !document
      .getElementsByClassName("spinreturn-hint3")[0]
      .classList.contains("active")
  ) {
    var img = document.getElementById("spinreturn-gif");
    img.src = "img/hurt/螺旋反折手.png";
  }
  setTimeout(() => {
    document
      .getElementsByClassName("spinreturn-book")[0]
      .classList.remove("active");
    document
      .getElementsByClassName("bookbackground")[0]
      .classList.remove("active");
  }, 1300);
});

// 八字包紮
document.getElementById("eight").addEventListener("click", function () {
  document.getElementsByClassName("eight-frame")[0].classList.add("active");
  document.getElementsByClassName("eight-book")[0].classList.add("active");
  document.getElementsByClassName("bookbackground")[0].classList.add("active");
  var img = document.getElementById("eight-book");
  img.src = "img/hurt/書_翻開.gif";
  if (
    !document
      .getElementsByClassName("eight-hint2")[0]
      .classList.contains("active") &&
    !document
      .getElementsByClassName("eight-hint3")[0]
      .classList.contains("active")
  ) {
    setTimeout(() => {
      document.getElementsByClassName("eight-hint1")[0].classList.add("active");
    }, 1800);
  }
});
document.getElementById("eight-return").addEventListener("click", function () {
  var img = document.getElementById("eight-gif");
  img.src = "img/hurt/八字包紮手.png";
  document.getElementsByClassName("eight-return")[0].classList.remove("active");
  setTimeout(() => {
    document.getElementsByClassName("eight-hint1")[0].classList.add("active");
  }, 800);
});
document.getElementById("eight-hint1").addEventListener("click", function () {
  var img = document.getElementById("eight-gif");
  img.src = "img/hurt/八字包紮1.gif";
  document.getElementsByClassName("eight-hint1")[0].classList.remove("active");
  setTimeout(() => {
    document.getElementsByClassName("eight-hint2")[0].classList.add("active");
  }, 1500);
});
document.getElementById("eight-hint2").addEventListener("click", function () {
  var img = document.getElementById("eight-gif");
  img.src = "img/hurt/八字包紮2.gif";
  document.getElementsByClassName("eight-hint2")[0].classList.remove("active");
  setTimeout(() => {
    document.getElementsByClassName("eight-hint3")[0].classList.add("active");
  }, 1500);
});
document.getElementById("eight-hint3").addEventListener("click", function () {
  var img = document.getElementById("eight-gif");
  img.src = "img/hurt/八字包紮3.gif";
  document.getElementsByClassName("eight-hint3")[0].classList.remove("active");
  setTimeout(() => {
    document.getElementsByClassName("eight-return")[0].classList.add("active");
  }, 1500);
});
document.getElementById("eight-x").addEventListener("click", function () {
  document.getElementsByClassName("eight-frame")[0].classList.remove("active");
  document.getElementsByClassName("eight-return")[0].classList.remove("active");
  var img = document.getElementById("eight-book");
  img.src = "img/hurt/書_闔上.gif";
  if (
    !document
      .getElementsByClassName("eight-hint2")[0]
      .classList.contains("active") &&
    !document
      .getElementsByClassName("eight-hint3")[0]
      .classList.contains("active")
  ) {
    var img = document.getElementById("eight-gif");
    img.src = "img/hurt/八字包紮手.png";
  }
  setTimeout(() => {
    document.getElementsByClassName("eight-book")[0].classList.remove("active");
    document
      .getElementsByClassName("bookbackground")[0]
      .classList.remove("active");
  }, 1300);
});

// 螺旋包紮
document.getElementById("spin").addEventListener("click", function () {
  document.getElementsByClassName("spin-frame")[0].classList.add("active");
  document.getElementsByClassName("spin-book")[0].classList.add("active");
  document.getElementsByClassName("bookbackground")[0].classList.add("active");
  var img = document.getElementById("spin-book");
  img.src = "img/hurt/書_翻開.gif";
  if (
    !document
      .getElementsByClassName("spin-hint2")[0]
      .classList.contains("active")
  ) {
    setTimeout(() => {
      document.getElementsByClassName("spin-hint1")[0].classList.add("active");
    }, 1800);
  }
});
document.getElementById("spin-return").addEventListener("click", function () {
  var img = document.getElementById("spin-gif");
  img.src = "img/hurt/螺旋包紮手.png";
  document.getElementsByClassName("spin-return")[0].classList.remove("active");
  setTimeout(() => {
    document.getElementsByClassName("spin-hint1")[0].classList.add("active");
  }, 800);
});
document.getElementById("spin-hint1").addEventListener("click", function () {
  var img = document.getElementById("spin-gif");
  img.src = "img/hurt/螺旋包紮1.gif";
  document.getElementsByClassName("spin-hint1")[0].classList.remove("active");
  setTimeout(() => {
    document.getElementsByClassName("spin-hint2")[0].classList.add("active");
  }, 1500);
});
document.getElementById("spin-hint2").addEventListener("click", function () {
  var img = document.getElementById("spin-gif");
  img.src = "img/hurt/螺旋包紮2.gif";
  document.getElementsByClassName("spin-hint2")[0].classList.remove("active");
  setTimeout(() => {
    document.getElementsByClassName("spin-return")[0].classList.add("active");
  }, 1500);
});
document.getElementById("spin-x").addEventListener("click", function () {
  document.getElementsByClassName("spin-frame")[0].classList.remove("active");
  document.getElementsByClassName("spin-return")[0].classList.remove("active");
  var img = document.getElementById("spin-book");
  img.src = "img/hurt/書_闔上.gif";
  if (
    !document
      .getElementsByClassName("spin-hint2")[0]
      .classList.contains("active")
  ) {
    var img = document.getElementById("spin-gif");
    img.src = "img/hurt/螺旋包紮手.png";
  }
  setTimeout(() => {
    document.getElementsByClassName("spin-book")[0].classList.remove("active");
    document
      .getElementsByClassName("bookbackground")[0]
      .classList.remove("active");
  }, 1300);
});

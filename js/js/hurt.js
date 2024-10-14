document.getElementById("bounce-arrow").addEventListener("click", function () {
  document.getElementsByClassName("bounce")[0].classList.remove("active");
});
document.getElementById("bounce-go").addEventListener("click", function () {
  document.getElementsByClassName("bounce")[0].classList.remove("active");
});

// 環形包紮
document.getElementById("cycle").addEventListener("mouseover", function () {
  var img = document.getElementById("cycle");
  img.src = "img/hurt/環形包紮法_haver.svg";
});
document.getElementById("cycle").addEventListener("mouseout", function () {
  var img = document.getElementById("cycle");
  img.src = "img/hurt/環形包紮法.svg";
});
document.getElementById("cycle").addEventListener("click", function () {
  document.getElementsByClassName("cycle-frame")[0].classList.add("active");
  document.getElementsByClassName("cycle-book")[0].classList.add("active");
  document
    .getElementsByClassName("hurt_bookbackground")[0]
    .classList.add("active");
  var img = document.getElementById("cycle-gif");
  img.src = "img/hurt/環形包紮手.png";
  var img = document.getElementById("cycle-book");
  img.src = "img/雙頁書_翻開.gif";
  document.getElementsByClassName("cycle-hint2")[0].classList.remove("active");
  document.getElementsByClassName("cycle-hint3")[0].classList.remove("active");
  {
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
  img.src = "img/雙頁書_闔上.gif";
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
      .getElementsByClassName("hurt_bookbackground")[0]
      .classList.remove("active");
  }, 1300);
});

// 回反包紮
document.getElementById("return").addEventListener("mouseover", function () {
  var img = document.getElementById("return");
  img.src = "img/hurt/回反包紮法_haver.svg";
});
document.getElementById("return").addEventListener("mouseout", function () {
  var img = document.getElementById("return");
  img.src = "img/hurt/回反包紮法.svg";
});
document.getElementById("return").addEventListener("click", function () {
  document.getElementsByClassName("return-frame")[0].classList.add("active");
  document.getElementsByClassName("return-book")[0].classList.add("active");
  document
    .getElementsByClassName("hurt_bookbackground")[0]
    .classList.add("active");
  var img = document.getElementById("return-book");
  img.src = "img/雙頁書_翻開.gif";
  var img = document.getElementById("return-gif");
  img.src = "img/hurt/回反包紮手.png";
  document.getElementsByClassName("return-hint2")[0].classList.remove("active");
  document.getElementsByClassName("return-hint3")[0].classList.remove("active");
  document.getElementsByClassName("return-hint4")[0].classList.remove("active");
  {
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
  img.src = "img/雙頁書_闔上.gif";
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
      .getElementsByClassName("hurt_bookbackground")[0]
      .classList.remove("active");
  }, 1300);
});

// 螺旋回反包紮
document
  .getElementById("spinreturn")
  .addEventListener("mouseover", function () {
    var img = document.getElementById("spinreturn");
    img.src = "img/hurt/螺旋反折包紮法_haver.svg";
  });
document.getElementById("spinreturn").addEventListener("mouseout", function () {
  var img = document.getElementById("spinreturn");
  img.src = "img/hurt/螺旋反折包紮法.svg";
});
document.getElementById("spinreturn").addEventListener("click", function () {
  document
    .getElementsByClassName("spinreturn-frame")[0]
    .classList.add("active");
  document.getElementsByClassName("spinreturn-book")[0].classList.add("active");
  document
    .getElementsByClassName("hurt_bookbackground")[0]
    .classList.add("active");
  var img = document.getElementById("spinreturn-book");
  img.src = "img/雙頁書_翻開.gif";
  var img = document.getElementById("spinreturn-gif");
  img.src = "img/hurt/螺旋反折手.png";
  document
    .getElementsByClassName("spinreturn-hint2")[0]
    .classList.remove("active");
  document
    .getElementsByClassName("spinreturn-hint3")[0]
    .classList.remove("active");
  {
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
  img.src = "img/雙頁書_闔上.gif";
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
      .getElementsByClassName("hurt_bookbackground")[0]
      .classList.remove("active");
  }, 1300);
});

// 八字包紮
document.getElementById("eight").addEventListener("mouseover", function () {
  var img = document.getElementById("eight");
  img.src = "img/hurt/八字包紮法_haver.svg";
});
document.getElementById("eight").addEventListener("mouseout", function () {
  var img = document.getElementById("eight");
  img.src = "img/hurt/八字包紮法.svg";
});
document.getElementById("eight").addEventListener("click", function () {
  document.getElementsByClassName("eight-frame")[0].classList.add("active");
  document.getElementsByClassName("eight-book")[0].classList.add("active");
  document
    .getElementsByClassName("hurt_bookbackground")[0]
    .classList.add("active");
  var img = document.getElementById("eight-book");
  img.src = "img/雙頁書_翻開.gif";
  var img = document.getElementById("eight-gif");
  img.src = "img/hurt/八字包紮手.png";
  document.getElementsByClassName("eight-hint2")[0].classList.remove("active");
  document.getElementsByClassName("eight-hint3")[0].classList.remove("active");
  {
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
  img.src = "img/雙頁書_闔上.gif";
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
      .getElementsByClassName("hurt_bookbackground")[0]
      .classList.remove("active");
  }, 1300);
});

// 螺旋包紮
document.getElementById("spin").addEventListener("mouseover", function () {
  var img = document.getElementById("spin");
  img.src = "img/hurt/螺旋包紮法_haver.svg";
});
document.getElementById("spin").addEventListener("mouseout", function () {
  var img = document.getElementById("spin");
  img.src = "img/hurt/螺旋包紮法.svg";
});
document.getElementById("spin").addEventListener("click", function () {
  document.getElementsByClassName("spin-frame")[0].classList.add("active");
  document.getElementsByClassName("spin-book")[0].classList.add("active");
  document
    .getElementsByClassName("hurt_bookbackground")[0]
    .classList.add("active");
  var img = document.getElementById("spin-book");
  img.src = "img/雙頁書_翻開.gif";
  document.getElementsByClassName("spin-hint2")[0].classList.remove("active");
  var img = document.getElementById("spin-gif");
  img.src = "img/hurt/螺旋包紮手.png";
  {
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
  img.src = "img/雙頁書_闔上.gif";
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
      .getElementsByClassName("hurt_bookbackground")[0]
      .classList.remove("active");
  }, 1300);
});

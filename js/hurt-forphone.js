// 定義目標 div
const targetDiv = document.querySelector(".hurt_right-third-line");

// 創建一個 IntersectionObserver 來監控目標 div
const observer = new IntersectionObserver((entries, observer) => {
  // 如果 div 可見，則添加 active class 到 bounce，並且只觸發一次
  if (entries[0].isIntersecting) {
    document.getElementsByClassName("bounce")[0].classList.add("active");
    // 停止觀察目標元素，確保只觸發一次
    observer.unobserve(targetDiv);
  }
});

// 開始觀察目標 div
observer.observe(targetDiv);

// 環形包紮
document
  .getElementById("cycle-forphone")
  .addEventListener("click", function () {
    document
      .getElementsByClassName("cycle-frame-forphone")[0]
      .classList.add("active");
    document
      .getElementsByClassName("cycle-book-forphone")[0]
      .classList.add("active");
    document
      .getElementsByClassName("hurt_bookbackground")[0]
      .classList.add("active");
    var img = document.getElementById("cycle-gif-forphone");
    img.src = "img/hurt/環形包紮手.png";
    var img = document.getElementById("cycle-book-forphone");
    img.src = "img/單頁書_翻開.gif";
    document
      .getElementsByClassName("cycle-forphone-hint2")[0]
      .classList.remove("active");
    document
      .getElementsByClassName("cycle-forphone-hint3")[0]
      .classList.remove("active");
    document
      .getElementsByClassName("cycle_detail1-forphone")[0]
      .classList.add("active");
    {
      setTimeout(() => {
        document
          .getElementsByClassName("cycle-forphone-hint1")[0]
          .classList.add("active");
      }, 1800);
    }
  });
document
  .getElementById("cycle-return-forphone")
  .addEventListener("click", function () {
    var img = document.getElementById("cycle-gif-forphone");
    img.src = "img/hurt/環形包紮手.png";
    document
      .getElementsByClassName("cycle-return-forphone")[0]
      .classList.remove("active");
    document
      .getElementsByClassName("cycle_detail1-forphone")[0]
      .classList.add("active");
    document
      .getElementsByClassName("cycle_detail3-forphone")[0]
      .classList.remove("active");
    setTimeout(() => {
      document
        .getElementsByClassName("cycle-forphone-hint1")[0]
        .classList.add("active");
    }, 800);
  });
document
  .getElementById("cycle-forphone-hint1")
  .addEventListener("click", function () {
    var img = document.getElementById("cycle-gif-forphone");
    img.src = "img/hurt/環形包紮1.gif";
    document
      .getElementsByClassName("cycle-forphone-hint1")[0]
      .classList.remove("active");
    setTimeout(() => {
      document
        .getElementsByClassName("cycle_detail1-forphone")[0]
        .classList.remove("active");
      document
        .getElementsByClassName("cycle_detail2-forphone")[0]
        .classList.add("active");
      document
        .getElementsByClassName("cycle-forphone-hint2")[0]
        .classList.add("active");
    }, 1500);
  });

document
  .getElementById("cycle-forphone-hint2")
  .addEventListener("click", function () {
    var img = document.getElementById("cycle-gif-forphone");
    img.src = "img/hurt/環形包紮2.gif";
    document
      .getElementsByClassName("cycle-forphone-hint2")[0]
      .classList.remove("active");
    setTimeout(() => {
      document
        .getElementsByClassName("cycle_detail2-forphone")[0]
        .classList.remove("active");
      document
        .getElementsByClassName("cycle_detail3-forphone")[0]
        .classList.add("active");
      document
        .getElementsByClassName("cycle-forphone-hint3")[0]
        .classList.add("active");
    }, 1500);
  });
document
  .getElementById("cycle-forphone-hint3")
  .addEventListener("click", function () {
    var img = document.getElementById("cycle-gif-forphone");
    img.src = "img/hurt/環形包紮3.gif";
    document
      .getElementsByClassName("cycle-forphone-hint3")[0]
      .classList.remove("active");
    setTimeout(() => {
      document
        .getElementsByClassName("cycle-return-forphone")[0]
        .classList.add("active");
    }, 1500);
  });
document
  .getElementById("cycle-x-forphone")
  .addEventListener("click", function () {
    document
      .getElementsByClassName("cycle-frame-forphone")[0]
      .classList.remove("active");
    document
      .getElementsByClassName("cycle-return-forphone")[0]
      .classList.remove("active");
    var img = document.getElementById("cycle-book-forphone");
    img.src = "img/單頁書_闔上.gif";
    document
      .getElementsByClassName("cycle_detail1-forphone")[0]
      .classList.remove("active");
    document
      .getElementsByClassName("cycle_detail2-forphone")[0]
      .classList.remove("active");
    document
      .getElementsByClassName("cycle_detail3-forphone")[0]
      .classList.remove("active");
    if (
      !document
        .getElementsByClassName("cycle-forphone-hint2")[0]
        .classList.contains("active") &&
      !document
        .getElementsByClassName("cycle-forphone-hint3")[0]
        .classList.contains("active")
    ) {
      var img = document.getElementById("cycle-gif-forphone");
      img.src = "img/hurt/環形包紮手.png";
    }
    setTimeout(() => {
      document
        .getElementsByClassName("cycle-book-forphone")[0]
        .classList.remove("active");
      document
        .getElementsByClassName("hurt_bookbackground")[0]
        .classList.remove("active");
    }, 1300);
  });

// 回反包紮
document
  .getElementById("return-forphone")
  .addEventListener("click", function () {
    document
      .getElementsByClassName("return-frame-forphone")[0]
      .classList.add("active");
    document
      .getElementsByClassName("return-book-forphone")[0]
      .classList.add("active");
    document
      .getElementsByClassName("hurt_bookbackground")[0]
      .classList.add("active");
    var img = document.getElementById("return-book-forphone");
    img.src = "img/單頁書_翻開.gif";
    var img = document.getElementById("return-gif-forphone");
    img.src = "img/hurt/回反包紮手.png";
    document
      .getElementsByClassName("return_detail1-forphone")[0]
      .classList.add("active");
    document
      .getElementsByClassName("return-forphone-hint2")[0]
      .classList.remove("active");
    document
      .getElementsByClassName("return-forphone-hint3")[0]
      .classList.remove("active");
    document
      .getElementsByClassName("return-forphone-hint4")[0]
      .classList.remove("active");
    {
      setTimeout(() => {
        document
          .getElementsByClassName("return-forphone-hint1")[0]
          .classList.add("active");
      }, 1800);
    }
  });
document
  .getElementById("return-return-forphone")
  .addEventListener("click", function () {
    var img = document.getElementById("return-gif-forphone");
    img.src = "img/hurt/回反包紮手.png";
    document
      .getElementsByClassName("return-return-forphone")[0]
      .classList.remove("active");
    document
      .getElementsByClassName("return_detail1-forphone")[0]
      .classList.add("active");
    document
      .getElementsByClassName("return_detail4-forphone")[0]
      .classList.remove("active");
    setTimeout(() => {
      document
        .getElementsByClassName("return-forphone-hint1")[0]
        .classList.add("active");
    }, 800);
  });
document
  .getElementById("return-forphone-hint1")
  .addEventListener("click", function () {
    var img = document.getElementById("return-gif-forphone");
    img.src = "img/hurt/回反包紮1.gif";
    document
      .getElementsByClassName("return-forphone-hint1")[0]
      .classList.remove("active");
    setTimeout(() => {
      document
        .getElementsByClassName("return_detail1-forphone")[0]
        .classList.remove("active");
      document
        .getElementsByClassName("return_detail2-forphone")[0]
        .classList.add("active");
      document
        .getElementsByClassName("return-forphone-hint2")[0]
        .classList.add("active");
    }, 1500);
  });
document
  .getElementById("return-forphone-hint2")
  .addEventListener("click", function () {
    var img = document.getElementById("return-gif-forphone");
    img.src = "img/hurt/回反包紮2.gif";
    document
      .getElementsByClassName("return-forphone-hint2")[0]
      .classList.remove("active");
    setTimeout(() => {
      document
        .getElementsByClassName("return_detail2-forphone")[0]
        .classList.remove("active");
      document
        .getElementsByClassName("return_detail3-forphone")[0]
        .classList.add("active");
      document
        .getElementsByClassName("return-forphone-hint3")[0]
        .classList.add("active");
    }, 1500);
  });
document
  .getElementById("return-forphone-hint3")
  .addEventListener("click", function () {
    var img = document.getElementById("return-gif-forphone");
    img.src = "img/hurt/回反包紮3.gif";
    document
      .getElementsByClassName("return-forphone-hint3")[0]
      .classList.remove("active");
    setTimeout(() => {
      document
        .getElementsByClassName("return_detail3-forphone")[0]
        .classList.remove("active");
      document
        .getElementsByClassName("return_detail4-forphone")[0]
        .classList.add("active");
      document
        .getElementsByClassName("return-forphone-hint4")[0]
        .classList.add("active");
    }, 1500);
  });
document
  .getElementById("return-forphone-hint4")
  .addEventListener("click", function () {
    var img = document.getElementById("return-gif-forphone");
    img.src = "img/hurt/回反包紮4.gif";
    document
      .getElementsByClassName("return-forphone-hint4")[0]
      .classList.remove("active");
    setTimeout(() => {
      document
        .getElementsByClassName("return-return-forphone")[0]
        .classList.add("active");
    }, 1500);
  });
document
  .getElementById("return-x-forphone")
  .addEventListener("click", function () {
    document
      .getElementsByClassName("return-frame-forphone")[0]
      .classList.remove("active");
    document
      .getElementsByClassName("return-return-forphone")[0]
      .classList.remove("active");
    var img = document.getElementById("return-book-forphone");
    img.src = "img/單頁書_闔上.gif";
    document
      .getElementsByClassName("return_detail1-forphone")[0]
      .classList.remove("active");
    document
      .getElementsByClassName("return_detail2-forphone")[0]
      .classList.remove("active");
    document
      .getElementsByClassName("return_detail3-forphone")[0]
      .classList.remove("active");
    document
      .getElementsByClassName("return_detail4-forphone")[0]
      .classList.remove("active");
    if (
      !document
        .getElementsByClassName("return-forphone-hint2")[0]
        .classList.contains("active") &&
      !document
        .getElementsByClassName("return-forphone-hint3")[0]
        .classList.contains("active") &&
      !document
        .getElementsByClassName("return-forphone-hint4")[0]
        .classList.contains("active")
    ) {
      var img = document.getElementById("return-gif-forphone");
      img.src = "img/hurt/回反包紮手.png";
    }
    setTimeout(() => {
      document
        .getElementsByClassName("return-book-forphone")[0]
        .classList.remove("active");
      document
        .getElementsByClassName("hurt_bookbackground")[0]
        .classList.remove("active");
    }, 1300);
  });

// 螺旋回反包紮
document
  .getElementById("spinreturn-forphone")
  .addEventListener("click", function () {
    document
      .getElementsByClassName("spinreturn-frame-forphone")[0]
      .classList.add("active");
    document
      .getElementsByClassName("spinreturn-book-forphone")[0]
      .classList.add("active");
    document
      .getElementsByClassName("hurt_bookbackground")[0]
      .classList.add("active");
    var img = document.getElementById("spinreturn-book-forphone");
    img.src = "img/單頁書_翻開.gif";
    var img = document.getElementById("spinreturn-gif-forphone");
    img.src = "img/hurt/螺旋反折手.png";
    document
      .getElementsByClassName("spinreturn-forphone-hint2")[0]
      .classList.remove("active");
    document
      .getElementsByClassName("spinreturn-forphone-hint3")[0]
      .classList.remove("active");
    document
      .getElementsByClassName("spinreturn_detail1-forphone")[0]
      .classList.add("active");
    {
      setTimeout(() => {
        document
          .getElementsByClassName("spinreturn-forphone-hint1")[0]
          .classList.add("active");
      }, 1800);
    }
  });
document
  .getElementById("spinreturn-return-forphone")
  .addEventListener("click", function () {
    var img = document.getElementById("spinreturn-gif-forphone");
    img.src = "img/hurt/螺旋反折手.png";
    document
      .getElementsByClassName("spinreturn-return-forphone")[0]
      .classList.remove("active");
    document
      .getElementsByClassName("spinreturn-forphone-hint1")[0]
      .classList.add("active");
    document
      .getElementsByClassName("spinreturn_detail1-forphone")[0]
      .classList.add("active");
    document
      .getElementsByClassName("spinreturn_detail3-forphone")[0]
      .classList.remove("active");
    setTimeout(() => {
      document
        .getElementsByClassName("spinreturn-hint1-forphone")[0]
        .classList.add("active");
    }, 800);
  });
document
  .getElementById("spinreturn-forphone-hint1")
  .addEventListener("click", function () {
    var img = document.getElementById("spinreturn-gif-forphone");
    img.src = "img/hurt/螺旋反折1.gif";
    document
      .getElementsByClassName("spinreturn-forphone-hint1")[0]
      .classList.remove("active");
    setTimeout(() => {
      document
        .getElementsByClassName("spinreturn_detail1-forphone")[0]
        .classList.remove("active");
      document
        .getElementsByClassName("spinreturn_detail2-forphone")[0]
        .classList.add("active");
      document
        .getElementsByClassName("spinreturn-forphone-hint2")[0]
        .classList.add("active");
    }, 1500);
  });
document
  .getElementById("spinreturn-forphone-hint2")
  .addEventListener("click", function () {
    var img = document.getElementById("spinreturn-gif-forphone");
    img.src = "img/hurt/螺旋反折2.gif";
    document
      .getElementsByClassName("spinreturn-forphone-hint2")[0]
      .classList.remove("active");
    setTimeout(() => {
      document
        .getElementsByClassName("spinreturn_detail2-forphone")[0]
        .classList.remove("active");
      document
        .getElementsByClassName("spinreturn_detail3-forphone")[0]
        .classList.add("active");
      document
        .getElementsByClassName("spinreturn-forphone-hint3")[0]
        .classList.add("active");
    }, 1500);
  });
document
  .getElementById("spinreturn-forphone-hint3")
  .addEventListener("click", function () {
    var img = document.getElementById("spinreturn-gif-forphone");
    img.src = "img/hurt/螺旋反折3.gif";
    document
      .getElementsByClassName("spinreturn-forphone-hint3")[0]
      .classList.remove("active");
    setTimeout(() => {
      document
        .getElementsByClassName("spinreturn-return-forphone")[0]
        .classList.add("active");
    }, 1500);
  });
document
  .getElementById("spinreturn-x-forphone")
  .addEventListener("click", function () {
    document
      .getElementsByClassName("spinreturn-frame-forphone")[0]
      .classList.remove("active");
    document
      .getElementsByClassName("spinreturn-return-forphone")[0]
      .classList.remove("active");
    var img = document.getElementById("spinreturn-book-forphone");
    img.src = "img/單頁書_闔上.gif";
    document
      .getElementsByClassName("spinreturn_detail1-forphone")[0]
      .classList.remove("active");
    document
      .getElementsByClassName("spinreturn_detail2-forphone")[0]
      .classList.remove("active");
    document
      .getElementsByClassName("spinreturn_detail3-forphone")[0]
      .classList.remove("active");
    if (
      !document
        .getElementsByClassName("spinreturn-forphone-hint2")[0]
        .classList.contains("active") &&
      !document
        .getElementsByClassName("spinreturn-forphone-hint3")[0]
        .classList.contains("active")
    ) {
      var img = document.getElementById("spinreturn-gif-forphone");
      img.src = "img/hurt/螺旋反折手.png";
    }
    setTimeout(() => {
      document
        .getElementsByClassName("spinreturn-book-forphone")[0]
        .classList.remove("active");
      document
        .getElementsByClassName("hurt_bookbackground")[0]
        .classList.remove("active");
    }, 1300);
  });

// 八字包紮
document
  .getElementById("eight-forphone")
  .addEventListener("click", function () {
    document
      .getElementsByClassName("eight-frame-forphone")[0]
      .classList.add("active");
    document
      .getElementsByClassName("eight-book-forphone")[0]
      .classList.add("active");
    document
      .getElementsByClassName("hurt_bookbackground")[0]
      .classList.add("active");
    var img = document.getElementById("eight-book-forphone");
    img.src = "img/單頁書_翻開.gif";
    var img = document.getElementById("eight-gif-forphone");
    img.src = "img/hurt/八字包紮手.png";
    document
      .getElementsByClassName("eight-forphone-hint2")[0]
      .classList.remove("active");
    document
      .getElementsByClassName("eight-forphone-hint3")[0]
      .classList.remove("active");
    document
      .getElementsByClassName("eight_detail1-forphone")[0]
      .classList.add("active");
    {
      setTimeout(() => {
        document
          .getElementsByClassName("eight-forphone-hint1")[0]
          .classList.add("active");
      }, 1800);
    }
  });
document
  .getElementById("eight-return-forphone")
  .addEventListener("click", function () {
    var img = document.getElementById("eight-gif-forphone");
    img.src = "img/hurt/八字包紮手.png";
    document
      .getElementsByClassName("eight-return-forphone")[0]
      .classList.remove("active");
    document
      .getElementsByClassName("eight_detail1-forphone")[0]
      .classList.add("active");
    document
      .getElementsByClassName("eight_detail3-forphone")[0]
      .classList.remove("active");
    setTimeout(() => {
      document
        .getElementsByClassName("eight-forphone-hint1")[0]
        .classList.add("active");
    }, 800);
  });
document
  .getElementById("eight-forphone-hint1")
  .addEventListener("click", function () {
    var img = document.getElementById("eight-gif-forphone");
    img.src = "img/hurt/八字包紮1.gif";
    document
      .getElementsByClassName("eight-forphone-hint1")[0]
      .classList.remove("active");
    setTimeout(() => {
      document
        .getElementsByClassName("eight_detail1-forphone")[0]
        .classList.remove("active");
      document
        .getElementsByClassName("eight_detail2-forphone")[0]
        .classList.add("active");
      document
        .getElementsByClassName("eight-forphone-hint2")[0]
        .classList.add("active");
    }, 1500);
  });
document
  .getElementById("eight-forphone-hint2")
  .addEventListener("click", function () {
    var img = document.getElementById("eight-gif-forphone");
    img.src = "img/hurt/八字包紮2.gif";
    document
      .getElementsByClassName("eight-forphone-hint2")[0]
      .classList.remove("active");
    setTimeout(() => {
      document
        .getElementsByClassName("eight_detail2-forphone")[0]
        .classList.remove("active");
      document
        .getElementsByClassName("eight_detail3-forphone")[0]
        .classList.add("active");
      document
        .getElementsByClassName("eight-forphone-hint3")[0]
        .classList.add("active");
    }, 1500);
  });
document
  .getElementById("eight-forphone-hint3")
  .addEventListener("click", function () {
    var img = document.getElementById("eight-gif-forphone");
    img.src = "img/hurt/八字包紮3.gif";
    document
      .getElementsByClassName("eight-forphone-hint3")[0]
      .classList.remove("active");
    setTimeout(() => {
      document
        .getElementsByClassName("eight-return-forphone")[0]
        .classList.add("active");
    }, 1500);
  });
document
  .getElementById("eight-x-forphone")
  .addEventListener("click", function () {
    document
      .getElementsByClassName("eight-frame-forphone")[0]
      .classList.remove("active");
    document
      .getElementsByClassName("eight-return-forphone")[0]
      .classList.remove("active");
    var img = document.getElementById("eight-book-forphone");
    img.src = "img/單頁書_闔上.gif";
    document
      .getElementsByClassName("eight_detail1-forphone")[0]
      .classList.remove("active");
    document
      .getElementsByClassName("eight_detail2-forphone")[0]
      .classList.remove("active");
    document
      .getElementsByClassName("eight_detail3-forphone")[0]
      .classList.remove("active");
    if (
      !document
        .getElementsByClassName("eight-forphone-hint2")[0]
        .classList.contains("active") &&
      !document
        .getElementsByClassName("eight-forphone-hint3")[0]
        .classList.contains("active")
    ) {
      var img = document.getElementById("eight-gif-forphone");
      img.src = "img/hurt/八字包紮手.png";
    }
    setTimeout(() => {
      document
        .getElementsByClassName("eight-book-forphone")[0]
        .classList.remove("active");
      document
        .getElementsByClassName("hurt_bookbackground")[0]
        .classList.remove("active");
    }, 1300);
  });

// 螺旋包紮
document.getElementById("spin-forphone").addEventListener("click", function () {
  document
    .getElementsByClassName("spin-frame-forphone")[0]
    .classList.add("active");
  document
    .getElementsByClassName("spin-book-forphone")[0]
    .classList.add("active");
  document
    .getElementsByClassName("hurt_bookbackground")[0]
    .classList.add("active");
  var img = document.getElementById("spin-book-forphone");
  img.src = "img/單頁書_翻開.gif";
  document
    .getElementsByClassName("spin-forphone-hint2")[0]
    .classList.remove("active");
  var img = document.getElementById("spin-gif-forphone");
  img.src = "img/hurt/螺旋包紮手.png";
  document
    .getElementsByClassName("spin_detail1-forphone")[0]
    .classList.add("active");
  {
    setTimeout(() => {
      document
        .getElementsByClassName("spin-forphone-hint1")[0]
        .classList.add("active");
    }, 1800);
  }
});
document
  .getElementById("spin-return-forphone")
  .addEventListener("click", function () {
    var img = document.getElementById("spin-gif-forphone");
    img.src = "img/hurt/螺旋包紮手.png";
    document
      .getElementsByClassName("spin-return-forphone")[0]
      .classList.remove("active");
    document
      .getElementsByClassName("spin_detail1-forphone")[0]
      .classList.add("active");
    document
      .getElementsByClassName("spin_detail2-forphone")[0]
      .classList.remove("active");
    setTimeout(() => {
      document
        .getElementsByClassName("spin-forphone-hint1")[0]
        .classList.add("active");
    }, 800);
  });
document
  .getElementById("spin-forphone-hint1")
  .addEventListener("click", function () {
    var img = document.getElementById("spin-gif-forphone");
    img.src = "img/hurt/螺旋包紮1.gif";
    document
      .getElementsByClassName("spin-forphone-hint1")[0]
      .classList.remove("active");
    setTimeout(() => {
      document
        .getElementsByClassName("spin_detail1-forphone")[0]
        .classList.remove("active");
      document
        .getElementsByClassName("spin_detail2-forphone")[0]
        .classList.add("active");
      document
        .getElementsByClassName("spin-forphone-hint2")[0]
        .classList.add("active");
    }, 1500);
  });
document
  .getElementById("spin-forphone-hint2")
  .addEventListener("click", function () {
    var img = document.getElementById("spin-gif-forphone");
    img.src = "img/hurt/螺旋包紮2.gif";
    document
      .getElementsByClassName("spin-forphone-hint2")[0]
      .classList.remove("active");
    setTimeout(() => {
      document
        .getElementsByClassName("spin-return-forphone")[0]
        .classList.add("active");
    }, 1500);
  });
document
  .getElementById("spin-x-forphone")
  .addEventListener("click", function () {
    document
      .getElementsByClassName("spin-frame-forphone")[0]
      .classList.remove("active");
    document
      .getElementsByClassName("spin-return-forphone")[0]
      .classList.remove("active");
    var img = document.getElementById("spin-book-forphone");
    img.src = "img/單頁書_闔上.gif";
    document
      .getElementsByClassName("spin_detail1-forphone")[0]
      .classList.remove("active");
    document
      .getElementsByClassName("spin_detail2-forphone")[0]
      .classList.remove("active");
    if (
      !document
        .getElementsByClassName("spin-forphone-hint2")[0]
        .classList.contains("active")
    ) {
      var img = document.getElementById("spin-gif-forphone");
      img.src = "img/hurt/螺旋包紮手.png";
    }
    setTimeout(() => {
      document
        .getElementsByClassName("spin-book-forphone")[0]
        .classList.remove("active");
      document
        .getElementsByClassName("hurt_bookbackground")[0]
        .classList.remove("active");
    }, 1300);
  });

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
//scroll hint
setTimeout(function () {
  document
    .getElementsByClassName("prepare-scroll-hint")[0]
    .classList.add("active");
}, 20000);

//居住類
document
  .getElementById("living-forphone")
  .addEventListener("click", function () {
    document.getElementsByClassName("living-frame1")[0].classList.add("active");
    document
      .getElementsByClassName("living-book-forphone")[0]
      .classList.add("active");
    document
      .getElementsByClassName("bookbackground")[0]
      .classList.add("active");
    var img = document.getElementById("living-book-forphone");
    img.src = "img/單頁書_翻開.gif";
  });
document
  .getElementById("living-forphone-arrow1")
  .addEventListener("click", function () {
    document
      .getElementsByClassName("living-frame1")[0]
      .classList.remove("active");
    document.getElementsByClassName("living-frame2")[0].classList.add("active");
    var img = document.getElementById("living-book-forphone");
    img.src = "img/單頁書_中繼.gif";
  });
document
  .getElementById("living-forphone-arrow2")
  .addEventListener("click", function () {
    document
      .getElementsByClassName("living-frame2")[0]
      .classList.remove("active");
    document.getElementsByClassName("living-frame1")[0].classList.add("active");
    var img = document.getElementById("living-book-forphone");
    img.src = "img/單頁書_中繼.gif";
  });

document
  .getElementById("living-phone-x1")
  .addEventListener("click", function () {
    document
      .getElementsByClassName("living-frame1")[0]
      .classList.remove("active");
    var img = document.getElementById("living-book-forphone");
    img.src = "img/單頁書_闔上.gif";
    setTimeout(() => {
      document
        .getElementsByClassName("living-book-forphone")[0]
        .classList.remove("active");
      document
        .getElementsByClassName("bookbackground")[0]
        .classList.remove("active");
    }, 1300);
  });
document
  .getElementById("living-phone-x2")
  .addEventListener("click", function () {
    document
      .getElementsByClassName("living-frame2")[0]
      .classList.remove("active");
    var img = document.getElementById("living-book-forphone");
    img.src = "img/單頁書_闔上.gif";
    setTimeout(() => {
      document
        .getElementsByClassName("living-book-forphone")[0]
        .classList.remove("active");
      document
        .getElementsByClassName("bookbackground")[0]
        .classList.remove("active");
    }, 1300);
  });

//雜項
document
  .getElementById("other-forphone")
  .addEventListener("click", function () {
    document.getElementsByClassName("other-frame1")[0].classList.add("active");
    document
      .getElementsByClassName("other-book-forphone")[0]
      .classList.add("active");
    document
      .getElementsByClassName("bookbackground")[0]
      .classList.add("active");
    var img = document.getElementById("other-book-forphone");
    img.src = "img/單頁書_翻開.gif";
  });
document
  .getElementById("other-forphone-arrow1")
  .addEventListener("click", function () {
    document
      .getElementsByClassName("other-frame1")[0]
      .classList.remove("active");
    document.getElementsByClassName("other-frame2")[0].classList.add("active");
    var img = document.getElementById("other-book-forphone");
    img.src = "img/單頁書_中繼.gif";
  });
document
  .getElementById("other-forphone-arrow2")
  .addEventListener("click", function () {
    document
      .getElementsByClassName("other-frame2")[0]
      .classList.remove("active");
    document.getElementsByClassName("other-frame1")[0].classList.add("active");
    var img = document.getElementById("other-book-forphone");
    img.src = "img/單頁書_中繼.gif";
  });
document
  .getElementById("other-phone-x1")
  .addEventListener("click", function () {
    document
      .getElementsByClassName("other-frame1")[0]
      .classList.remove("active");
    var img = document.getElementById("other-book-forphone");
    img.src = "img/單頁書_闔上.gif";
    setTimeout(() => {
      document
        .getElementsByClassName("other-book-forphone")[0]
        .classList.remove("active");
      document
        .getElementsByClassName("bookbackground")[0]
        .classList.remove("active");
    }, 1300);
  });
document
  .getElementById("other-phone-x2")
  .addEventListener("click", function () {
    document
      .getElementsByClassName("other-frame2")[0]
      .classList.remove("active");
    var img = document.getElementById("other-book-forphone");
    img.src = "img/單頁書_闔上.gif";
    setTimeout(() => {
      document
        .getElementsByClassName("other-book-forphone")[0]
        .classList.remove("active");
      document
        .getElementsByClassName("bookbackground")[0]
        .classList.remove("active");
    }, 1300);
  });

//飲食及安全求生類
document.getElementById("food-forphone").addEventListener("click", function () {
  document
    .getElementsByClassName("prepare-scroll-hint")[0]
    .classList.remove("active");
  document.getElementsByClassName("food-frame1-1")[0].classList.add("active");
  document
    .getElementsByClassName("food-book-forphone")[0]
    .classList.add("active");
  document.getElementsByClassName("bookbackground")[0].classList.add("active");
  var img = document.getElementById("food-book-forphone");
  img.src = "img/單頁書_翻開.gif";
});
document
  .getElementById("food-forphone-arrow1")
  .addEventListener("click", function () {
    document
      .getElementsByClassName("food-frame1-1")[0]
      .classList.remove("active");
    document.getElementsByClassName("food-frame2-1")[0].classList.add("active");
    var img = document.getElementById("food-book-forphone");
    img.src = "img/單頁書_中繼.gif";
  });
document
  .getElementById("food-forphone-arrow2")
  .addEventListener("click", function () {
    document
      .getElementsByClassName("food-frame2-1")[0]
      .classList.remove("active");
    document.getElementsByClassName("food-frame1-1")[0].classList.add("active");
    var img = document.getElementById("food-book-forphone");
    img.src = "img/單頁書_中繼.gif";
  });
document
  .getElementById("food-forphone-arrow3")
  .addEventListener("click", function () {
    document
      .getElementsByClassName("food-frame2-1")[0]
      .classList.remove("active");
    document.getElementsByClassName("food-frame3-1")[0].classList.add("active");
    var img = document.getElementById("food-book-forphone");
    img.src = "img/單頁書_中繼.gif";
  });
document
  .getElementById("food-forphone-arrow4")
  .addEventListener("click", function () {
    document
      .getElementsByClassName("food-frame3-1")[0]
      .classList.remove("active");
    document.getElementsByClassName("food-frame2-1")[0].classList.add("active");
    var img = document.getElementById("food-book-forphone");
    img.src = "img/單頁書_中繼.gif";
  });
document
  .getElementById("food-forphone-arrow5")
  .addEventListener("click", function () {
    document
      .getElementsByClassName("food-frame3-1")[0]
      .classList.remove("active");
    document.getElementsByClassName("food-frame4-1")[0].classList.add("active");
    var img = document.getElementById("food-book-forphone");
    img.src = "img/單頁書_中繼.gif";
  });
document
  .getElementById("food-forphone-arrow6")
  .addEventListener("click", function () {
    document
      .getElementsByClassName("food-frame4-1")[0]
      .classList.remove("active");
    document.getElementsByClassName("food-frame3-1")[0].classList.add("active");
    var img = document.getElementById("food-book-forphone");
    img.src = "img/單頁書_中繼.gif";
  });
document
  .getElementById("food-forphone-arrow7")
  .addEventListener("click", function () {
    document
      .getElementsByClassName("food-frame4-1")[0]
      .classList.remove("active");
    document.getElementsByClassName("food-frame5")[0].classList.add("active");
    var img = document.getElementById("food-book-forphone");
    img.src = "img/單頁書_中繼.gif";
  });
document
  .getElementById("food-forphone-arrow8")
  .addEventListener("click", function () {
    document
      .getElementsByClassName("food-frame5")[0]
      .classList.remove("active");
    document.getElementsByClassName("food-frame4-1")[0].classList.add("active");
    var img = document.getElementById("food-book-forphone");
    img.src = "img/單頁書_中繼.gif";
  });
document
  .getElementById("food-forphone-arrow9")
  .addEventListener("click", function () {
    document
      .getElementsByClassName("food-frame5")[0]
      .classList.remove("active");
    document.getElementsByClassName("food-frame6")[0].classList.add("active");
    var img = document.getElementById("food-book-forphone");
    img.src = "img/單頁書_中繼.gif";
  });
document
  .getElementById("food-forphone-arrow10")
  .addEventListener("click", function () {
    document
      .getElementsByClassName("food-frame6")[0]
      .classList.remove("active");
    document.getElementsByClassName("food-frame5")[0].classList.add("active");
    var img = document.getElementById("food-book-forphone");
    img.src = "img/單頁書_中繼.gif";
  });
document
  .getElementById("food-forphone-arrow11")
  .addEventListener("click", function () {
    document
      .getElementsByClassName("food-frame6")[0]
      .classList.remove("active");
    document.getElementsByClassName("food-frame7")[0].classList.add("active");
    var img = document.getElementById("food-book-forphone");
    img.src = "img/單頁書_中繼.gif";
  });
document
  .getElementById("food-forphone-arrow12")
  .addEventListener("click", function () {
    document
      .getElementsByClassName("food-frame7")[0]
      .classList.remove("active");
    document.getElementsByClassName("food-frame6")[0].classList.add("active");
    var img = document.getElementById("food-book-forphone");
    img.src = "img/單頁書_中繼.gif";
  });

document.getElementById("food-phone-x1").addEventListener("click", function () {
  document
    .getElementsByClassName("food-frame1-1")[0]
    .classList.remove("active");
  var img = document.getElementById("food-book-forphone");
  img.src = "img/單頁書_闔上.gif";
  setTimeout(() => {
    document
      .getElementsByClassName("food-book-forphone")[0]
      .classList.remove("active");
    document
      .getElementsByClassName("bookbackground")[0]
      .classList.remove("active");
  }, 1300);
});
document.getElementById("food-phone-x2").addEventListener("click", function () {
  document
    .getElementsByClassName("food-frame2-1")[0]
    .classList.remove("active");
  var img = document.getElementById("food-book-forphone");
  img.src = "img/單頁書_闔上.gif";
  setTimeout(() => {
    document
      .getElementsByClassName("food-book-forphone")[0]
      .classList.remove("active");
    document
      .getElementsByClassName("bookbackground")[0]
      .classList.remove("active");
  }, 1300);
});
document.getElementById("food-phone-x3").addEventListener("click", function () {
  document
    .getElementsByClassName("food-frame3-1")[0]
    .classList.remove("active");
  var img = document.getElementById("food-book-forphone");
  img.src = "img/單頁書_闔上.gif";
  setTimeout(() => {
    document
      .getElementsByClassName("food-book-forphone")[0]
      .classList.remove("active");
    document
      .getElementsByClassName("bookbackground")[0]
      .classList.remove("active");
  }, 1300);
});
document.getElementById("food-phone-x4").addEventListener("click", function () {
  document
    .getElementsByClassName("food-frame4-1")[0]
    .classList.remove("active");
  var img = document.getElementById("food-book-forphone");
  img.src = "img/單頁書_闔上.gif";
  setTimeout(() => {
    document
      .getElementsByClassName("food-book-forphone")[0]
      .classList.remove("active");
    document
      .getElementsByClassName("bookbackground")[0]
      .classList.remove("active");
  }, 1300);
});
document.getElementById("food-phone-x5").addEventListener("click", function () {
  document.getElementsByClassName("food-frame5")[0].classList.remove("active");
  var img = document.getElementById("food-book-forphone");
  img.src = "img/單頁書_闔上.gif";
  setTimeout(() => {
    document
      .getElementsByClassName("food-book-forphone")[0]
      .classList.remove("active");
    document
      .getElementsByClassName("bookbackground")[0]
      .classList.remove("active");
  }, 1300);
});
document.getElementById("food-phone-x6").addEventListener("click", function () {
  document.getElementsByClassName("food-frame6")[0].classList.remove("active");
  var img = document.getElementById("food-book-forphone");
  img.src = "img/單頁書_闔上.gif";
  setTimeout(() => {
    document
      .getElementsByClassName("food-book-forphone")[0]
      .classList.remove("active");
    document
      .getElementsByClassName("bookbackground")[0]
      .classList.remove("active");
  }, 1300);
});
document.getElementById("food-phone-x7").addEventListener("click", function () {
  document.getElementsByClassName("food-frame7")[0].classList.remove("active");
  var img = document.getElementById("food-book-forphone");
  img.src = "img/單頁書_闔上.gif";
  setTimeout(() => {
    document
      .getElementsByClassName("food-book-forphone")[0]
      .classList.remove("active");
    document
      .getElementsByClassName("bookbackground")[0]
      .classList.remove("active");
  }, 1300);
});

//烹煮類
document.getElementById("cook-forphone").addEventListener("click", function () {
  document.getElementsByClassName("cook-frame1-1")[0].classList.add("active");
  document
    .getElementsByClassName("cook-book-forphone")[0]
    .classList.add("active");
  document.getElementsByClassName("bookbackground")[0].classList.add("active");
  var img = document.getElementById("cook-book-forphone");
  img.src = "img/單頁書_翻開.gif";
});
document
  .getElementById("cook-forphone-arrow1")
  .addEventListener("click", function () {
    document
      .getElementsByClassName("cook-frame1-1")[0]
      .classList.remove("active");
    document.getElementsByClassName("cook-frame2-1")[0].classList.add("active");
    var img = document.getElementById("cook-book-forphone");
    img.src = "img/單頁書_中繼.gif";
  });
document
  .getElementById("cook-forphone-arrow2")
  .addEventListener("click", function () {
    document
      .getElementsByClassName("cook-frame2-1")[0]
      .classList.remove("active");
    document.getElementsByClassName("cook-frame1-1")[0].classList.add("active");
    var img = document.getElementById("cook-book-forphone");
    img.src = "img/單頁書_中繼.gif";
  });
document
  .getElementById("cook-forphone-arrow3")
  .addEventListener("click", function () {
    document
      .getElementsByClassName("cook-frame2-1")[0]
      .classList.remove("active");
    document.getElementsByClassName("cook-frame3")[0].classList.add("active");
    var img = document.getElementById("cook-book-forphone");
    img.src = "img/單頁書_中繼.gif";
  });
document
  .getElementById("cook-forphone-arrow4")
  .addEventListener("click", function () {
    document
      .getElementsByClassName("cook-frame3")[0]
      .classList.remove("active");
    document.getElementsByClassName("cook-frame2-1")[0].classList.add("active");
    var img = document.getElementById("cook-book-forphone");
    img.src = "img/單頁書_中繼.gif";
  });
document
  .getElementById("cook-forphone-arrow5")
  .addEventListener("click", function () {
    document
      .getElementsByClassName("cook-frame3")[0]
      .classList.remove("active");
    document.getElementsByClassName("cook-frame4")[0].classList.add("active");
    var img = document.getElementById("cook-book-forphone");
    img.src = "img/單頁書_中繼.gif";
  });
document
  .getElementById("cook-forphone-arrow6")
  .addEventListener("click", function () {
    document
      .getElementsByClassName("cook-frame4")[0]
      .classList.remove("active");
    document.getElementsByClassName("cook-frame3")[0].classList.add("active");
    var img = document.getElementById("cook-book-forphone");
    img.src = "img/單頁書_中繼.gif";
  });
document;
document.getElementById("cook-phone-x1").addEventListener("click", function () {
  document
    .getElementsByClassName("cook-frame1-1")[0]
    .classList.remove("active");
  var img = document.getElementById("cook-book-forphone");
  img.src = "img/單頁書_闔上.gif";
  setTimeout(() => {
    document
      .getElementsByClassName("cook-book-forphone")[0]
      .classList.remove("active");
    document
      .getElementsByClassName("bookbackground")[0]
      .classList.remove("active");
  }, 1300);
});
document.getElementById("cook-phone-x2").addEventListener("click", function () {
  document
    .getElementsByClassName("cook-frame2-1")[0]
    .classList.remove("active");
  var img = document.getElementById("cook-book-forphone");
  img.src = "img/單頁書_闔上.gif";
  setTimeout(() => {
    document
      .getElementsByClassName("cook-book-forphone")[0]
      .classList.remove("active");
    document
      .getElementsByClassName("bookbackground")[0]
      .classList.remove("active");
  }, 1300);
});
document.getElementById("cook-phone-x3").addEventListener("click", function () {
  document.getElementsByClassName("cook-frame3")[0].classList.remove("active");
  var img = document.getElementById("cook-book-forphone");
  img.src = "img/單頁書_闔上.gif";
  setTimeout(() => {
    document
      .getElementsByClassName("cook-book-forphone")[0]
      .classList.remove("active");
    document
      .getElementsByClassName("bookbackground")[0]
      .classList.remove("active");
  }, 1300);
});
document.getElementById("cook-phone-x4").addEventListener("click", function () {
  document.getElementsByClassName("cook-frame4")[0].classList.remove("active");
  var img = document.getElementById("cook-book-forphone");
  img.src = "img/單頁書_闔上.gif";
  setTimeout(() => {
    document
      .getElementsByClassName("cook-book-forphone")[0]
      .classList.remove("active");
    document
      .getElementsByClassName("bookbackground")[0]
      .classList.remove("active");
  }, 1300);
});

//行走類
document.getElementById("walk-forphone").addEventListener("click", function () {
  document.getElementsByClassName("walk-frame1")[0].classList.add("active");
  document
    .getElementsByClassName("walk-book-forphone")[0]
    .classList.add("active");
  document.getElementsByClassName("bookbackground")[0].classList.add("active");
  var img = document.getElementById("walk-book-forphone");
  img.src = "img/單頁書_翻開.gif";
});
document
  .getElementById("walk-forphone-arrow1")
  .addEventListener("click", function () {
    document
      .getElementsByClassName("walk-frame1")[0]
      .classList.remove("active");
    document.getElementsByClassName("walk-frame2")[0].classList.add("active");
    var img = document.getElementById("walk-book-forphone");
    img.src = "img/單頁書_中繼.gif";
  });
document
  .getElementById("walk-forphone-arrow2")
  .addEventListener("click", function () {
    document
      .getElementsByClassName("walk-frame2")[0]
      .classList.remove("active");
    document.getElementsByClassName("walk-frame1")[0].classList.add("active");
    var img = document.getElementById("walk-book-forphone");
    img.src = "img/單頁書_中繼.gif";
  });
document.getElementById("walk-phone-x1").addEventListener("click", function () {
  document.getElementsByClassName("walk-frame1")[0].classList.remove("active");
  var img = document.getElementById("walk-book-forphone");
  img.src = "img/單頁書_闔上.gif";
  setTimeout(() => {
    document
      .getElementsByClassName("walk-book-forphone")[0]
      .classList.remove("active");
    document
      .getElementsByClassName("bookbackground")[0]
      .classList.remove("active");
  }, 1300);
});
document.getElementById("walk-phone-x2").addEventListener("click", function () {
  document.getElementsByClassName("walk-frame2")[0].classList.remove("active");
  var img = document.getElementById("walk-book-forphone");
  img.src = "img/單頁書_闔上.gif";
  setTimeout(() => {
    document
      .getElementsByClassName("walk-book-forphone")[0]
      .classList.remove("active");
    document
      .getElementsByClassName("bookbackground")[0]
      .classList.remove("active");
  }, 1300);
});

//衣著類
document
  .getElementById("cloth-forphone")
  .addEventListener("click", function () {
    document
      .getElementsByClassName("cloth-frame1-1")[0]
      .classList.add("active");
    document
      .getElementsByClassName("cloth-book-forphone")[0]
      .classList.add("active");
    document
      .getElementsByClassName("bookbackground")[0]
      .classList.add("active");
    var img = document.getElementById("cloth-book-forphone");
    img.src = "img/單頁書_翻開.gif";
  });
document
  .getElementById("cloth-forphone-arrow1")
  .addEventListener("click", function () {
    document
      .getElementsByClassName("cloth-frame1-1")[0]
      .classList.remove("active");
    document
      .getElementsByClassName("cloth-frame2-1")[0]
      .classList.add("active");
    var img = document.getElementById("cloth-book-forphone");
    img.src = "img/單頁書_中繼.gif";
  });
document
  .getElementById("cloth-forphone-arrow2")
  .addEventListener("click", function () {
    document
      .getElementsByClassName("cloth-frame1-1")[0]
      .classList.add("active");
    document
      .getElementsByClassName("cloth-frame2-1")[0]
      .classList.remove("active");
    var img = document.getElementById("cloth-book-forphone");
    img.src = "img/單頁書_中繼.gif";
  });
document
  .getElementById("cloth-forphone-arrow3")
  .addEventListener("click", function () {
    document
      .getElementsByClassName("cloth-frame2-1")[0]
      .classList.remove("active");
    document
      .getElementsByClassName("cloth-frame3-1")[0]
      .classList.add("active");
    var img = document.getElementById("cloth-book-forphone");
    img.src = "img/單頁書_中繼.gif";
  });
document
  .getElementById("cloth-forphone-arrow4")
  .addEventListener("click", function () {
    document
      .getElementsByClassName("cloth-frame2-1")[0]
      .classList.add("active");
    document
      .getElementsByClassName("cloth-frame3-1")[0]
      .classList.remove("active");
    var img = document.getElementById("cloth-book-forphone");
    img.src = "img/單頁書_中繼.gif";
  });
document
  .getElementById("cloth-forphone-arrow5")
  .addEventListener("click", function () {
    document
      .getElementsByClassName("cloth-frame3-1")[0]
      .classList.remove("active");
    document.getElementsByClassName("cloth-frame4")[0].classList.add("active");
    var img = document.getElementById("cloth-book-forphone");
    img.src = "img/單頁書_中繼.gif";
  });
document
  .getElementById("cloth-forphone-arrow6")
  .addEventListener("click", function () {
    document
      .getElementsByClassName("cloth-frame3-1")[0]
      .classList.add("active");
    document
      .getElementsByClassName("cloth-frame4")[0]
      .classList.remove("active");
    var img = document.getElementById("cloth-book-forphone");
    img.src = "img/單頁書_中繼.gif";
  });
document
  .getElementById("cloth-forphone-arrow7")
  .addEventListener("click", function () {
    document.getElementsByClassName("cloth-frame5")[0].classList.add("active");
    document
      .getElementsByClassName("cloth-frame4")[0]
      .classList.remove("active");
    var img = document.getElementById("cloth-book-forphone");
    img.src = "img/單頁書_中繼.gif";
  });
document
  .getElementById("cloth-forphone-arrow8")
  .addEventListener("click", function () {
    document.getElementsByClassName("cloth-frame4")[0].classList.add("active");
    document
      .getElementsByClassName("cloth-frame5")[0]
      .classList.remove("active");
    var img = document.getElementById("cloth-book-forphone");
    img.src = "img/單頁書_中繼.gif";
  });
document
  .getElementById("cloth-forphone-arrow9")
  .addEventListener("click", function () {
    document.getElementsByClassName("cloth-frame6")[0].classList.add("active");
    document
      .getElementsByClassName("cloth-frame5")[0]
      .classList.remove("active");
    var img = document.getElementById("cloth-book-forphone");
    img.src = "img/單頁書_中繼.gif";
  });
document
  .getElementById("cloth-forphone-arrow10")
  .addEventListener("click", function () {
    document.getElementsByClassName("cloth-frame5")[0].classList.add("active");
    document
      .getElementsByClassName("cloth-frame6")[0]
      .classList.remove("active");
    var img = document.getElementById("cloth-book-forphone");
    img.src = "img/單頁書_中繼.gif";
  });
document
  .getElementById("cloth-phone-x1")
  .addEventListener("click", function () {
    setTimeout(function () {
      document
        .getElementsByClassName("prepare-scroll-hint")[0]
        .classList.add("active");
    }, 1500);
    document
      .getElementsByClassName("cloth-frame1-1")[0]
      .classList.remove("active");
    document
      .getElementsByClassName("cloth-frame2-1")[0]
      .classList.remove("active");
    var img = document.getElementById("cloth-book-forphone");
    img.src = "img/單頁書_闔上.gif";
    setTimeout(() => {
      document
        .getElementsByClassName("cloth-book-forphone")[0]
        .classList.remove("active");
      document
        .getElementsByClassName("bookbackground")[0]
        .classList.remove("active");
    }, 1300);
  });
document
  .getElementById("cloth-phone-x2")
  .addEventListener("click", function () {
    document
      .getElementsByClassName("cloth-frame1-1")[0]
      .classList.remove("active");
    document
      .getElementsByClassName("cloth-frame2-1")[0]
      .classList.remove("active");
    var img = document.getElementById("cloth-book-forphone");
    img.src = "img/單頁書_闔上.gif";
    setTimeout(() => {
      document
        .getElementsByClassName("cloth-book-forphone")[0]
        .classList.remove("active");
      document
        .getElementsByClassName("bookbackground")[0]
        .classList.remove("active");
    }, 1300);
  });
document
  .getElementById("cloth-phone-x3")
  .addEventListener("click", function () {
    document
      .getElementsByClassName("cloth-frame3-1")[0]
      .classList.remove("active");
    var img = document.getElementById("cloth-book-forphone");
    img.src = "img/單頁書_闔上.gif";
    setTimeout(() => {
      document
        .getElementsByClassName("cloth-book-forphone")[0]
        .classList.remove("active");
      document
        .getElementsByClassName("bookbackground")[0]
        .classList.remove("active");
    }, 1300);
  });
document
  .getElementById("cloth-phone-x4")
  .addEventListener("click", function () {
    document
      .getElementsByClassName("cloth-frame4")[0]
      .classList.remove("active");
    var img = document.getElementById("cloth-book-forphone");
    img.src = "img/單頁書_闔上.gif";
    setTimeout(() => {
      document
        .getElementsByClassName("cloth-book-forphone")[0]
        .classList.remove("active");
      document
        .getElementsByClassName("bookbackground")[0]
        .classList.remove("active");
    }, 1300);
  });
document
  .getElementById("cloth-phone-x5")
  .addEventListener("click", function () {
    document
      .getElementsByClassName("cloth-frame5")[0]
      .classList.remove("active");
    var img = document.getElementById("cloth-book-forphone");
    img.src = "img/單頁書_闔上.gif";
    setTimeout(() => {
      document
        .getElementsByClassName("cloth-book-forphone")[0]
        .classList.remove("active");
      document
        .getElementsByClassName("bookbackground")[0]
        .classList.remove("active");
    }, 1300);
  });
document
  .getElementById("cloth-phone-x6")
  .addEventListener("click", function () {
    document
      .getElementsByClassName("cloth-frame6")[0]
      .classList.remove("active");
    var img = document.getElementById("cloth-book-forphone");
    img.src = "img/單頁書_闔上.gif";
    setTimeout(() => {
      document
        .getElementsByClassName("cloth-book-forphone")[0]
        .classList.remove("active");
      document
        .getElementsByClassName("bookbackground")[0]
        .classList.remove("active");
    }, 1300);
  });

// 頁面滾動的parallax
gsap.registerPlugin(ScrollTrigger);

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".package",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  })
  .to(".package", { backgroundPosition: "50% 0", ease: "none" });

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".hurt",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  })
  .to(".hurt", { backgroundPosition: "50% 0", ease: "none" });

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".entry",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  })
  .to(".entry", { backgroundPosition: "50% 0", ease: "none" });

// 雲轉場的parallax
// window.addEventListener("scroll", function () {
//   const scrollValue = window.scrollY;
//   const imgElement = document.getElementById("transcloud1");

//   const newBottomValue = 125 - scrollValue / 13 + "vh";

//   imgElement.style.top = newBottomValue;
// });
// window.addEventListener("scroll", function () {
//   const scrollValue = window.scrollY;
//   const imgElement = document.getElementById("transcloud3");

//   const newBottomValue = 146 - scrollValue / 13 + "vh";

//   imgElement.style.top = newBottomValue;
// });
// window.addEventListener("scroll", function () {
//   const scrollValue = window.scrollY;
//   const imgElement = document.getElementById("transcloud4");

//   const newBottomValue = 160 - scrollValue / 13 + "vh";

//   imgElement.style.top = newBottomValue;
// });
// window.addEventListener("scroll", function () {
//   const scrollValue = window.scrollY;
//   const imgElement = document.getElementById("transcloud5");

//   const newBottomValue = 400 - scrollValue / 13 + "vh";

//   imgElement.style.top = newBottomValue;
// });
// window.addEventListener("scroll", function () {
//   const scrollValue = window.scrollY;
//   const imgElement = document.getElementById("transcloud6");

//   const newBottomValue = 422 - scrollValue / 13 + "vh";

//   imgElement.style.top = newBottomValue;
// });
// window.addEventListener("scroll", function () {
//   const scrollValue = window.scrollY;
//   const imgElement = document.getElementById("transcloud7");

//   const newBottomValue = 443 - scrollValue / 13 + "vh";

//   imgElement.style.top = newBottomValue;
// });
// window.addEventListener("scroll", function () {
//   const scrollValue = window.scrollY;
//   const imgElement = document.getElementById("transcloud8");

//   const newBottomValue = 448 - scrollValue / 13 + "vh";

//   imgElement.style.top = newBottomValue;
// });

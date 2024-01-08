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

// header海拔高度滾動效果
document.addEventListener("DOMContentLoaded", function () {
  const theCard = document.querySelector(".thecard");
  let isCardFlipped = false;

  window.addEventListener("scroll", function () {
    const scrollingNumber = parseInt(
      document.getElementById("scrollingNumber").textContent
    );

    let backgroundImageSource = "../img/entery/title.png"; // 默认背景图源

    if (scrollingNumber >= 200 && scrollingNumber < 400) {
      backgroundImageSource = "./img/hurt/title.png";
    } else if (scrollingNumber >= 400) {
      backgroundImageSource = "./img/entery/title.png";
    } else {
      backgroundImageSource = "./img/package/title.png";
    }

    // 应用翻牌效果
    theCard.style.transition = "all 0.3s ease";
    theCard.style.transform = "rotateY(180deg)";

    // 在翻牌效果完成后更改背景图
    setTimeout(function () {
      theCard.style.backgroundImage = `url("${backgroundImageSource}")`;
      theCard.style.transform = "rotateY(0deg)";
    }, 300);
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

    const newNumber = Math.round(100 + (scrollPercentage / 100) * 400);

    if (newNumber !== currentNumber) {
      currentNumber = newNumber;
      scrollingNumberElement.textContent = currentNumber;

      // 根据 scrollingNumber 的值计算新的 scrollingText 内容
      let newText;
      if (currentNumber >= 400) {
        newText = "1-3";
      } else if (currentNumber >= 200) {
        newText = "1-2";
      } else {
        newText = "1-1";
      }

      scrollingTextElement.textContent = newText;
    }
  });
});

// 背包頁:Start
document
  .getElementById("package-id")
  .addEventListener("mouseover", function () {
    setTimeout(function () {
      document.getElementsByClassName("span1")[0].classList.add("active");
      document.getElementsByClassName("span2")[0].classList.add("active");
      document.getElementsByClassName("span3")[0].classList.add("active");
      document.getElementsByClassName("span5")[0].classList.add("active");
      document.getElementsByClassName("span6")[0].classList.add("active");
      document.getElementsByClassName("span7")[0].classList.add("active");
      document.getElementsByClassName("span8")[0].classList.add("active");
      document.getElementsByClassName("span9")[0].classList.add("active");
      document.getElementsByClassName("openbag")[0].classList.add("active");
      document.getElementsByClassName("living")[0].classList.add("active");
      document.getElementsByClassName("other")[0].classList.add("active");
      document.getElementsByClassName("food")[0].classList.add("active");
      document.getElementsByClassName("cook")[0].classList.add("active");
      document.getElementsByClassName("walk")[0].classList.add("active");
      document.getElementsByClassName("cloth")[0].classList.add("active");
    }, 1000);
    setTimeout(function () {
      document.getElementsByClassName("scroll-hint")[0].classList.add("active");
    }, 20000);
  });

//居住類
document.getElementById("living").addEventListener("click", function () {
  document.getElementsByClassName("scroll-hint")[0].classList.remove("active");
  document.getElementsByClassName("living-frame")[0].classList.add("active");
  document.getElementsByClassName("living-book")[0].classList.add("active");
  document.getElementsByClassName("bookbackground")[0].classList.add("active");
  var img = document.getElementById("living-book");
  img.src = "img/書_翻開.gif";
});
document.getElementById("living-x").addEventListener("click", function () {
  setTimeout(function () {
    document.getElementsByClassName("scroll-hint")[0].classList.add("active");
  }, 1500);
  document.getElementsByClassName("living-frame")[0].classList.remove("active");
  var img = document.getElementById("living-book");
  img.src = "img/書_闔上.gif";
  setTimeout(() => {
    document
      .getElementsByClassName("living-book")[0]
      .classList.remove("active");
    document
      .getElementsByClassName("bookbackground")[0]
      .classList.remove("active");
  }, 1300);
});
document.getElementById("tent").addEventListener("mouseover", function () {
  document.getElementsByClassName("tent-detail")[0].classList.add("active");
  document.getElementsByClassName("tent")[0].classList.add("active");
});
document.getElementById("tent").addEventListener("mouseout", function () {
  document.getElementsByClassName("tent-detail")[0].classList.remove("active");
  document.getElementsByClassName("tent")[0].classList.remove("active");
});
document.getElementById("sleepbag").addEventListener("mouseover", function () {
  document.getElementsByClassName("sleepbag-detail")[0].classList.add("active");
  document.getElementsByClassName("sleepbag")[0].classList.add("active");
});
document.getElementById("sleepbag").addEventListener("mouseout", function () {
  document
    .getElementsByClassName("sleepbag-detail")[0]
    .classList.remove("active");
  document.getElementsByClassName("sleepbag")[0].classList.remove("active");
});

//雜項
document.getElementById("other").addEventListener("click", function () {
  document.getElementsByClassName("scroll-hint")[0].classList.remove("active");
  document.getElementsByClassName("other-frame")[0].classList.add("active");
  document.getElementsByClassName("other-book")[0].classList.add("active");
  document.getElementsByClassName("bookbackground")[0].classList.add("active");
  var img = document.getElementById("other-book");
  img.src = "img/書_翻開.gif";
});
document.getElementById("other-x").addEventListener("click", function () {
  setTimeout(function () {
    document.getElementsByClassName("scroll-hint")[0].classList.add("active");
  }, 1500);
  document.getElementsByClassName("other-frame")[0].classList.remove("active");
  var img = document.getElementById("other-book");
  img.src = "img/書_闔上.gif";
  setTimeout(() => {
    document.getElementsByClassName("other-book")[0].classList.remove("active");
    document
      .getElementsByClassName("bookbackground")[0]
      .classList.remove("active");
  }, 1300);
});
document
  .getElementById("garbagebag")
  .addEventListener("mouseover", function () {
    document
      .getElementsByClassName("garbagebag-detail")[0]
      .classList.add("active");
    document.getElementsByClassName("garbagebag")[0].classList.add("active");
  });
document.getElementById("garbagebag").addEventListener("mouseout", function () {
  document
    .getElementsByClassName("garbagebag-detail")[0]
    .classList.remove("active");
  document.getElementsByClassName("garbagebag")[0].classList.remove("active");
});
document.getElementById("buttery").addEventListener("mouseover", function () {
  document.getElementsByClassName("buttery-detail")[0].classList.add("active");
  document.getElementsByClassName("buttery")[0].classList.add("active");
});
document.getElementById("buttery").addEventListener("mouseout", function () {
  document
    .getElementsByClassName("buttery-detail")[0]
    .classList.remove("active");
  document.getElementsByClassName("buttery")[0].classList.remove("active");
});

//飲食及安全求生類
document.getElementById("food").addEventListener("click", function () {
  document.getElementsByClassName("scroll-hint")[0].classList.remove("active");
  document.getElementsByClassName("food-frame1")[0].classList.add("active");
  document.getElementsByClassName("food-book")[0].classList.add("active");
  document.getElementsByClassName("bookbackground")[0].classList.add("active");
  var img = document.getElementById("food-book");
  img.src = "img/書_翻開.gif";
});
document.getElementById("food-arrow1").addEventListener("click", function () {
  document.getElementsByClassName("food-frame1")[0].classList.remove("active");
  document.getElementsByClassName("food-frame2")[0].classList.add("active");
  var img = document.getElementById("food-book");
  img.src = "img/package/書_中繼.gif";
});
document.getElementById("food-arrow2").addEventListener("click", function () {
  document.getElementsByClassName("food-frame1")[0].classList.add("active");
  document.getElementsByClassName("food-frame2")[0].classList.remove("active");
  var img = document.getElementById("food-book");
  img.src = "img/package/書_中繼.gif";
});
document.getElementById("water").addEventListener("mouseover", function () {
  document.getElementsByClassName("water-detail")[0].classList.add("active");
  document.getElementsByClassName("water")[0].classList.add("active");
});
document.getElementById("water").addEventListener("mouseout", function () {
  document.getElementsByClassName("water-detail")[0].classList.remove("active");
  document.getElementsByClassName("water")[0].classList.remove("active");
});
document.getElementById("map").addEventListener("mouseover", function () {
  document.getElementsByClassName("map-detail")[0].classList.add("active");
  document.getElementsByClassName("map")[0].classList.add("active");
});
document.getElementById("map").addEventListener("mouseout", function () {
  document.getElementsByClassName("map-detail")[0].classList.remove("active");
  document.getElementsByClassName("map")[0].classList.remove("active");
});
document.getElementById("rope").addEventListener("mouseover", function () {
  document.getElementsByClassName("rope-detail")[0].classList.add("active");
  document.getElementsByClassName("rope")[0].classList.add("active");
});
document.getElementById("rope").addEventListener("mouseout", function () {
  document.getElementsByClassName("rope-detail")[0].classList.remove("active");
  document.getElementsByClassName("rope")[0].classList.remove("active");
});
document
  .getElementById("flashlight")
  .addEventListener("mouseover", function () {
    document
      .getElementsByClassName("flashlight-detail")[0]
      .classList.add("active");
    document.getElementsByClassName("flashlight")[0].classList.add("active");
  });
document.getElementById("flashlight").addEventListener("mouseout", function () {
  document
    .getElementsByClassName("flashlight-detail")[0]
    .classList.remove("active");
  document.getElementsByClassName("flashlight")[0].classList.remove("active");
});
document.getElementById("innerfood").addEventListener("mouseover", function () {
  document
    .getElementsByClassName("innerfood-detail")[0]
    .classList.add("active");
  document.getElementsByClassName("innerfood")[0].classList.add("active");
});
document.getElementById("innerfood").addEventListener("mouseout", function () {
  document
    .getElementsByClassName("innerfood-detail")[0]
    .classList.remove("active");
  document.getElementsByClassName("innerfood")[0].classList.remove("active");
});
document.getElementById("south").addEventListener("mouseover", function () {
  document.getElementsByClassName("south-detail")[0].classList.add("active");
  document.getElementsByClassName("south")[0].classList.add("active");
});
document.getElementById("south").addEventListener("mouseout", function () {
  document.getElementsByClassName("south-detail")[0].classList.remove("active");
  document.getElementsByClassName("south")[0].classList.remove("active");
});
document
  .getElementById("emergencybox")
  .addEventListener("mouseover", function () {
    document
      .getElementsByClassName("emergencybox-detail")[0]
      .classList.add("active");
    document.getElementsByClassName("emergencybox")[0].classList.add("active");
  });
document
  .getElementById("emergencybox")
  .addEventListener("mouseout", function () {
    document
      .getElementsByClassName("emergencybox-detail")[0]
      .classList.remove("active");
    document
      .getElementsByClassName("emergencybox")[0]
      .classList.remove("active");
  });
document.getElementById("food-x1").addEventListener("click", function () {
  setTimeout(function () {
    document.getElementsByClassName("scroll-hint")[0].classList.add("active");
  }, 1500);
  document.getElementsByClassName("food-frame1")[0].classList.remove("active");
  document.getElementsByClassName("food-frame2")[0].classList.remove("active");
  var img = document.getElementById("food-book");
  img.src = "img/書_闔上.gif";
  setTimeout(() => {
    document.getElementsByClassName("food-book")[0].classList.remove("active");
    document
      .getElementsByClassName("bookbackground")[0]
      .classList.remove("active");
  }, 1300);
});
document.getElementById("food-x2").addEventListener("click", function () {
  setTimeout(function () {
    document.getElementsByClassName("scroll-hint")[0].classList.add("active");
  }, 1500);
  document.getElementsByClassName("food-frame1")[0].classList.remove("active");
  document.getElementsByClassName("food-frame2")[0].classList.remove("active");
  var img = document.getElementById("food-book");
  img.src = "img/書_闔上.gif";
  setTimeout(() => {
    document.getElementsByClassName("food-book")[0].classList.remove("active");
    document
      .getElementsByClassName("bookbackground")[0]
      .classList.remove("active");
  }, 1300);
});

//烹煮類
document.getElementById("cook").addEventListener("click", function () {
  document.getElementsByClassName("scroll-hint")[0].classList.remove("active");
  document.getElementsByClassName("cook-frame")[0].classList.add("active");
  document.getElementsByClassName("cook-book")[0].classList.add("active");
  document.getElementsByClassName("bookbackground")[0].classList.add("active");
  var img = document.getElementById("cook-book");
  img.src = "img/書_翻開.gif";
});
document.getElementById("knife").addEventListener("mouseover", function () {
  document.getElementsByClassName("knife-detail")[0].classList.add("active");
  document.getElementsByClassName("knife")[0].classList.add("active");
});
document.getElementById("knife").addEventListener("mouseout", function () {
  document.getElementsByClassName("knife-detail")[0].classList.remove("active");
  document.getElementsByClassName("knife")[0].classList.remove("active");
});
document.getElementById("stove").addEventListener("mouseover", function () {
  document.getElementsByClassName("stove-detail")[0].classList.add("active");
  document.getElementsByClassName("stove")[0].classList.add("active");
});
document.getElementById("stove").addEventListener("mouseout", function () {
  document.getElementsByClassName("stove-detail")[0].classList.remove("active");
  document.getElementsByClassName("stove")[0].classList.remove("active");
});
document.getElementById("lighter").addEventListener("mouseover", function () {
  document.getElementsByClassName("lighter-detail")[0].classList.add("active");
  document.getElementsByClassName("lighter")[0].classList.add("active");
});
document.getElementById("lighter").addEventListener("mouseout", function () {
  document
    .getElementsByClassName("lighter-detail")[0]
    .classList.remove("active");
  document.getElementsByClassName("lighter")[0].classList.remove("active");
});
document
  .getElementById("spiderstove")
  .addEventListener("mouseover", function () {
    document
      .getElementsByClassName("spiderstove-detail")[0]
      .classList.add("active");
    document.getElementsByClassName("spiderstove")[0].classList.add("active");
  });
document
  .getElementById("spiderstove")
  .addEventListener("mouseout", function () {
    document
      .getElementsByClassName("spiderstove-detail")[0]
      .classList.remove("active");
    document
      .getElementsByClassName("spiderstove")[0]
      .classList.remove("active");
  });
document.getElementById("cook-x").addEventListener("click", function () {
  setTimeout(function () {
    document.getElementsByClassName("scroll-hint")[0].classList.add("active");
  }, 1500);
  document.getElementsByClassName("cook-frame")[0].classList.remove("active");
  var img = document.getElementById("cook-book");
  img.src = "img/書_闔上.gif";
  setTimeout(() => {
    document.getElementsByClassName("cook-book")[0].classList.remove("active");
    document
      .getElementsByClassName("bookbackground")[0]
      .classList.remove("active");
  }, 1300);
});

//行走類
document.getElementById("walk").addEventListener("click", function () {
  document.getElementsByClassName("scroll-hint")[0].classList.remove("active");
  document.getElementsByClassName("walk-frame")[0].classList.add("active");
  document.getElementsByClassName("walk-book")[0].classList.add("active");
  document.getElementsByClassName("bookbackground")[0].classList.add("active");
  var img = document.getElementById("walk-book");
  img.src = "img/書_翻開.gif";
});
document.getElementById("walk-x").addEventListener("click", function () {
  setTimeout(function () {
    document.getElementsByClassName("scroll-hint")[0].classList.add("active");
  }, 1500);
  document.getElementsByClassName("walk-frame")[0].classList.remove("active");
  var img = document.getElementById("walk-book");
  img.src = "img/書_闔上.gif";
  setTimeout(() => {
    document.getElementsByClassName("walk-book")[0].classList.remove("active");
    document
      .getElementsByClassName("bookbackground")[0]
      .classList.remove("active");
  }, 1300);
});
document.getElementById("shoes").addEventListener("mouseover", function () {
  document.getElementsByClassName("shoes-detail")[0].classList.add("active");
  document.getElementsByClassName("shoes")[0].classList.add("active");
});
document.getElementById("shoes").addEventListener("mouseout", function () {
  document.getElementsByClassName("shoes-detail")[0].classList.remove("active");
  document.getElementsByClassName("shoes")[0].classList.remove("active");
});
document.getElementById("pole").addEventListener("mouseover", function () {
  document.getElementsByClassName("pole-detail")[0].classList.add("active");
  document.getElementsByClassName("pole")[0].classList.add("active");
});
document.getElementById("pole").addEventListener("mouseout", function () {
  document.getElementsByClassName("pole-detail")[0].classList.remove("active");
  document.getElementsByClassName("pole")[0].classList.remove("active");
});

//衣著類
document.getElementById("cloth").addEventListener("click", function () {
  document.getElementsByClassName("scroll-hint")[0].classList.remove("active");
  document.getElementsByClassName("cloth-frame1")[0].classList.add("active");
  document.getElementsByClassName("cloth-book")[0].classList.add("active");
  document.getElementsByClassName("bookbackground")[0].classList.add("active");
  var img = document.getElementById("cloth-book");
  img.src = "img/書_翻開.gif";
});
document.getElementById("cloth-arrow1").addEventListener("click", function () {
  document.getElementsByClassName("cloth-frame1")[0].classList.remove("active");
  document.getElementsByClassName("cloth-frame2")[0].classList.add("active");
  var img = document.getElementById("cloth-book");
  img.src = "img/package/書_中繼.gif";
});
document.getElementById("cloth-arrow2").addEventListener("click", function () {
  document.getElementsByClassName("cloth-frame1")[0].classList.add("active");
  document.getElementsByClassName("cloth-frame2")[0].classList.remove("active");
  var img = document.getElementById("cloth-book");
  img.src = "img/package/書_中繼.gif";
});
document.getElementById("sweat").addEventListener("mouseover", function () {
  document.getElementsByClassName("sweat-detail")[0].classList.add("active");
  document.getElementsByClassName("sweat")[0].classList.add("active");
});
document.getElementById("sweat").addEventListener("mouseout", function () {
  document.getElementsByClassName("sweat-detail")[0].classList.remove("active");
  document.getElementsByClassName("sweat")[0].classList.remove("active");
});
document.getElementById("hot").addEventListener("mouseover", function () {
  document.getElementsByClassName("hot-detail")[0].classList.add("active");
  document.getElementsByClassName("hot")[0].classList.add("active");
});
document.getElementById("hot").addEventListener("mouseout", function () {
  document.getElementsByClassName("hot-detail")[0].classList.remove("active");
  document.getElementsByClassName("hot")[0].classList.remove("active");
});
document.getElementById("coat").addEventListener("mouseover", function () {
  document.getElementsByClassName("coat-detail")[0].classList.add("active");
  document.getElementsByClassName("coat")[0].classList.add("active");
});
document.getElementById("coat").addEventListener("mouseout", function () {
  document.getElementsByClassName("coat-detail")[0].classList.remove("active");
  document.getElementsByClassName("coat")[0].classList.remove("active");
});
document.getElementById("hat").addEventListener("mouseover", function () {
  document.getElementsByClassName("hat-detail")[0].classList.add("active");
  document.getElementsByClassName("hat")[0].classList.add("active");
});
document.getElementById("hat").addEventListener("mouseout", function () {
  document.getElementsByClassName("hat-detail")[0].classList.remove("active");
  document.getElementsByClassName("hat")[0].classList.remove("active");
});
document.getElementById("raincoat").addEventListener("mouseover", function () {
  document.getElementsByClassName("raincoat-detail")[0].classList.add("active");
  document.getElementsByClassName("raincoat")[0].classList.add("active");
});
document.getElementById("raincoat").addEventListener("mouseout", function () {
  document
    .getElementsByClassName("raincoat-detail")[0]
    .classList.remove("active");
  document.getElementsByClassName("raincoat")[0].classList.remove("active");
});
document.getElementById("pants").addEventListener("mouseover", function () {
  document.getElementsByClassName("pants-detail")[0].classList.add("active");
  document.getElementsByClassName("pants")[0].classList.add("active");
});
document.getElementById("pants").addEventListener("mouseout", function () {
  document.getElementsByClassName("pants-detail")[0].classList.remove("active");
  document.getElementsByClassName("pants")[0].classList.remove("active");
});
document.getElementById("cloth-x1").addEventListener("click", function () {
  setTimeout(function () {
    document.getElementsByClassName("scroll-hint")[0].classList.add("active");
  }, 1500);
  document.getElementsByClassName("cloth-frame1")[0].classList.remove("active");
  document.getElementsByClassName("cloth-frame2")[0].classList.remove("active");
  var img = document.getElementById("cloth-book");
  img.src = "img/書_闔上.gif";
  setTimeout(() => {
    document.getElementsByClassName("cloth-book")[0].classList.remove("active");
    document
      .getElementsByClassName("bookbackground")[0]
      .classList.remove("active");
  }, 1300);
});
document.getElementById("cloth-x2").addEventListener("click", function () {
  setTimeout(function () {
    document.getElementsByClassName("scroll-hint")[0].classList.add("active");
  }, 1500);
  document.getElementsByClassName("cloth-frame1")[0].classList.remove("active");
  document.getElementsByClassName("cloth-frame2")[0].classList.remove("active");
  var img = document.getElementById("cloth-book");
  img.src = "img/書_闔上.gif";
  setTimeout(() => {
    document.getElementsByClassName("cloth-book")[0].classList.remove("active");
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
window.addEventListener("scroll", function () {
  const scrollValue = window.scrollY;
  const imgElement = document.getElementById("transcloud1");

  const newBottomValue = 103 - scrollValue / 13 + "vh";

  imgElement.style.top = newBottomValue;
});
window.addEventListener("scroll", function () {
  const scrollValue = window.scrollY;
  const imgElement = document.getElementById("transcloud2");

  const newBottomValue = 125 - scrollValue / 13 + "vh";

  imgElement.style.top = newBottomValue;
});
window.addEventListener("scroll", function () {
  const scrollValue = window.scrollY;
  const imgElement = document.getElementById("transcloud3");

  const newBottomValue = 146 - scrollValue / 13 + "vh";

  imgElement.style.top = newBottomValue;
});
window.addEventListener("scroll", function () {
  const scrollValue = window.scrollY;
  const imgElement = document.getElementById("transcloud4");

  const newBottomValue = 160 - scrollValue / 13 + "vh";

  imgElement.style.top = newBottomValue;
});
window.addEventListener("scroll", function () {
  const scrollValue = window.scrollY;
  const imgElement = document.getElementById("transcloud5");

  const newBottomValue = 400 - scrollValue / 13 + "vh";

  imgElement.style.top = newBottomValue;
});
window.addEventListener("scroll", function () {
  const scrollValue = window.scrollY;
  const imgElement = document.getElementById("transcloud6");

  const newBottomValue = 422 - scrollValue / 13 + "vh";

  imgElement.style.top = newBottomValue;
});
window.addEventListener("scroll", function () {
  const scrollValue = window.scrollY;
  const imgElement = document.getElementById("transcloud7");

  const newBottomValue = 443 - scrollValue / 13 + "vh";

  imgElement.style.top = newBottomValue;
});
window.addEventListener("scroll", function () {
  const scrollValue = window.scrollY;
  const imgElement = document.getElementById("transcloud8");

  const newBottomValue = 448 - scrollValue / 13 + "vh";

  imgElement.style.top = newBottomValue;
});

//刷新頁面時置頂復位
window.onbeforeunload = function () {
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
};

// 通知
function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}

//顯示password
const input = document.querySelector(".password");
const toggleVisibility = document.querySelector(".invisible img");

toggleVisibility.addEventListener("click", () => {
  if (input.getAttribute("type") === "password") {
    input.setAttribute("type", "text");
    toggleVisibility.setAttribute(
      "src",
      "./img/login_signup/visibility_off.svg"
    );
  } else {
    input.setAttribute("type", "password");
    toggleVisibility.setAttribute("src", "./img/login_signup/visibility.svg");
  }
});

//sendmail
function SendMail() {
  var params = {
    email: document.getElementById("email").value,
  };
  emailjs
    .send("service_i0f0jv3", "template_ts36ue7", params)
    .then(function (res) {
      document.getElementById("email").value = "";
      console.log(res);
      alert("您已註冊成功！請查看信箱獲取小青蛙送你的桌布～");
      // 跳轉到 membership.html
      window.location.href = "membership.html";
    });
}

//按Enter送出
document
  .querySelector(".password")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      SendMail();
    }
  });

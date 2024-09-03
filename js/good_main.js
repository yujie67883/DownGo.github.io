document.addEventListener("DOMContentLoaded", function () {
  const equipmentTab = document.querySelector(".segmented_control.equipment");
  const packageTab = document.querySelector(".segmented_control.package");
  const faqTab = document.querySelector(".segmented_control.faq");
  const equipmentPage = document.getElementById("equipment_page");
  const packagePage = document.getElementById("package_page");
  const faqPage = document.getElementById("faq_page");

  // 初始状态设置
  equipmentTab.classList.add("active");
  equipmentPage.style.display = "block";
  packagePage.style.display = "none";

  equipmentTab.addEventListener("click", function () {
    equipmentTab.classList.add("active");
    packageTab.classList.remove("active");
    faqTab.classList.remove("active");
    equipmentPage.style.display = "block";
    packagePage.style.display = "none";
    faqPage.style.display = "none";
  });

  packageTab.addEventListener("click", function () {
    packageTab.classList.add("active");
    equipmentTab.classList.remove("active");
    faqTab.classList.remove("active");
    packagePage.style.display = "block";
    equipmentPage.style.display = "none";
    faqPage.style.display = "none";
  });

  faqTab.addEventListener("click", function () {
    faqTab.classList.add("active");
    packageTab.classList.remove("active");
    equipmentTab.classList.remove("active");
    faqPage.style.display = "block";
    equipmentPage.style.display = "none";
    packagePage.style.display = "none";
  });

  equipmentTab.addEventListener("click", function () {
    activateTab(equipmentTab, equipmentPage, packageTab, packagePage);
  });

  packageTab.addEventListener("click", function () {
    activateTab(packageTab, packagePage, equipmentTab, equipmentPage);
  });

  // 初始状态设置
  activateTab(equipmentTab, equipmentPage, packageTab, packagePage);
});

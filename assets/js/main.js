const features = document.getElementById("features");
const company = document.getElementById("company");
const dropdownFeatures = document.getElementById("header-features-dropdown");
const dropdownCompany = document.getElementById("header-company-dropdown");
const down = document.getElementById("down");
const up = document.getElementById("up");
const featuresBars = document.getElementById("bars-featurs");
const companyBars = document.getElementById("bars-company");
const dropdownFeaturesBars = document.getElementById("bars-dropdownFeatures");
const dropdownCompanyBars = document.getElementById("bars-dropdownCompany");
const bergerIcon = document.getElementById("header-bars");
const headerMenu = document.getElementById("header-menu-bars");
const closeMenu = document.getElementById("close-menu");

hideShowDropdown = (value1, value2, index1, index2) => {
  if (value1.classList.contains("hide")) {
    value2.children[0].children[index1].classList.remove("show");
    value2.children[0].children[index1].classList.add("hide");
    value2.children[0].children[index2].classList.add("show");
    value2.children[0].children[index2].classList.remove("hide");
    value1.classList.remove("hide");
    value1.classList.add("show");
  } else {
    value2.children[0].children[index1].classList.add("show");
    value2.children[0].children[index1].classList.remove("hide");
    value2.children[0].children[index2].classList.remove("show");
    value2.children[0].children[index2].classList.add("hide");
    value1.classList.add("hide");
    value1.classList.remove("show");
  }
};
hideShowBergerIcon = (value1, value2) => {
  if (value1.classList.contains("show")) {
    value1.classList.remove("show");
    value2.classList.add("show");
    value1.classList.add("hide");
    value2.classList.remove("hide");
  } else {
    value1.classList.add("show");
    value2.classList.remove("show");
    value1.classList.remove("hide");
    value2.classList.add("hide");
  }
};
hideShowCloseIcon = (value1, value2) => {
  value1.classList.remove("hide");
  value2.classList.add("hide");
  value1.classList.add("show");
  value2.classList.remove("show");
};
resizeWindow = (value1, value2) => {
  if (window.innerWidth > 768) {
    value2.classList.remove("show");
    value2.classList.add("hide");
  }
  if (window.innerWidth < 768) {
    value1.classList.remove("hide");
    value1.classList.add("show");
  }
};

features.addEventListener("click", () => {
  hideShowDropdown(dropdownFeatures, features, 1, 2);
});
company.addEventListener("click", () => {
  hideShowDropdown(dropdownCompany, company, 1, 2);
});
featuresBars.addEventListener("click", () => {
  hideShowDropdown(dropdownFeaturesBars, featuresBars, 0, 1);
});
companyBars.addEventListener("click", () => {
  hideShowDropdown(dropdownCompanyBars, companyBars, 0, 1);
});
bergerIcon.addEventListener("click", () => {
  hideShowBergerIcon(bergerIcon, headerMenu);
});
closeMenu.addEventListener("click", () => {
  hideShowCloseIcon(bergerIcon, headerMenu);
});
window.addEventListener("resize", () => {
  resizeWindow(bergerIcon, headerMenu);
});

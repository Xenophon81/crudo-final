var header = document.querySelector("#header");
var hoogte_header = header.offsetTop;
var logo = document.querySelector("img.logo");

console.log(header, hoogte_header, logo);

window.onscroll = () => {
  if (window.pageYOffset > hoogte_header) {
    header.classList.add("stick-to-header");
    logo.src = "./img/logo_black.svg";
  } else {
    header.classList.remove("stick-to-header");
    logo.src = "./img/logo_white.svg";
  }
};

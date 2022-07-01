const menuIcon = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".header__center");

if (menuIcon) {
  menuIcon.addEventListener("click", function (e) {
    document.body.classList.toggle("_lock");
    menuIcon.classList.toggle("_active");
    menuBody.classList.toggle("_active");
  });
}

let offset = 0;
const sliderLine = document.querySelector(".slider__line");
const btnPrev = document.querySelector(".button__prev");
const btnNext = document.querySelector(".button__next");

if(btnNext){
  btnNext.addEventListener("click", () => {
    offset = offset + 780;
    if (offset > 2340) {
      offset = 0;
    }
    sliderLine.style.left = -offset + `px`;
  })
};

if(btnPrev){
  btnPrev.addEventListener("click", () => {
    offset = offset - 780;
    if (offset < 0) {
      offset = 2340;
    }
    sliderLine.style.left = -offset + `px`;
  })
};


const sizeItems = document.querySelectorAll(".purchase__size_item");

console.log(sizeItems)

for (let sizeItem of sizeItems) {
  sizeItem.addEventListener('click', (e) => {
    sizeItem.classList.toggle("purchase__size_item-bold")
  })
  ;
}

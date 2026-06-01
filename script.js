const slider = document.querySelector(".stories-slider");
const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");

rightBtn.addEventListener("click", () => {
  slider.scrollLeft += 350;
});

leftBtn.addEventListener("click", () => {
  slider.scrollLeft -= 350;
});

const merchSlider = document.querySelector(".merch-slider");

const merchLeft = document.querySelector(".merch-left");
const merchRight = document.querySelector(".merch-right");

merchRight.addEventListener("click", () => {
  merchSlider.scrollLeft += 300;
});

merchLeft.addEventListener("click", () => {
  merchSlider.scrollLeft -= 300;
});
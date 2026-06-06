/* HISTORIAS */

const slider = document.querySelector(".stories-slider");
const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");

if (slider && leftBtn && rightBtn) {

  rightBtn.addEventListener("click", () => {
    slider.scrollLeft += 350;
  });

  leftBtn.addEventListener("click", () => {
    slider.scrollLeft -= 350;
  });

}


/* MERCH */

const merchSlider = document.querySelector(".merch-slider");
const merchLeft = document.querySelector(".merch-left");
const merchRight = document.querySelector(".merch-right");

if (merchSlider && merchLeft && merchRight) {

  merchRight.addEventListener("click", () => {
    merchSlider.scrollLeft += merchSlider.offsetWidth;
  });

  merchLeft.addEventListener("click", () => {
    merchSlider.scrollLeft -= merchSlider.offsetWidth;
  });

}

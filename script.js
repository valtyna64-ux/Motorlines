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



document.addEventListener("DOMContentLoaded", function () {

    const menu = document.getElementById("menu-toggle");
    const nav = document.getElementById("nav-menu");

    menu.addEventListener("click", function () {

        nav.classList.toggle("active");

        if (nav.classList.contains("active")) {
            menu.innerHTML = "✕";
        } else {
            menu.innerHTML = "☰";
        }

    });

    // Cerrar el menú al seleccionar una opción
    document.querySelectorAll(".nav-menu a").forEach(link => {
        link.addEventListener("click", function () {
            nav.classList.remove("active");
            menu.innerHTML = "☰";
        });
    });

});

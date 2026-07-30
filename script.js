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





  document.addEventListener("DOMContentLoaded", () => {

    // Solo en escritorio
    if (window.innerWidth <= 768) return;

    const slider = document.querySelector(".stories-container");

    if (!slider) return;

    const cards = [...slider.children];

    // Duplicamos las tarjetas para crear el efecto infinito
    cards.forEach(card => {
        slider.appendChild(card.cloneNode(true));
    });

    let current = 0;
    let paused = false;

    const cardWidth = cards[0].offsetWidth + 30; // 30 = gap del CSS

    slider.style.transition = "transform .8s ease";

    function moveSlider() {

        if (paused) return;

        current++;

        slider.style.transform = `translateX(-${current * cardWidth}px)`;

        // Cuando llega al final de las originales
        if (current === cards.length) {

            setTimeout(() => {

                slider.style.transition = "none";
                slider.style.transform = "translateX(0)";
                current = 0;

                // Fuerza el reflow
                slider.offsetHeight;

                slider.style.transition = "transform .8s ease";

            }, 800);

        }

    }

    let interval = setInterval(moveSlider, 4000);

    slider.addEventListener("mouseenter", () => {
        paused = true;
    });

    slider.addEventListener("mouseleave", () => {
        paused = false;
    });

});

});

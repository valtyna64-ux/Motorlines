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


/* ==========================
   CARRUSEL HISTORIAS
========================== */

document.addEventListener("DOMContentLoaded", () => {

    // Solo en escritorio
    if (window.innerWidth <= 768) return;

    const slider = document.querySelector(".stories-container");

    if (!slider) return;

    const cards = [...slider.children];

    // Duplicar las tarjetas para efecto infinito
    cards.forEach(card => {
        slider.appendChild(card.cloneNode(true));
    });

    let current = 0;
    let paused = false;

    const gap = 30; // Debe ser igual al gap del CSS
    const cardWidth = cards[0].offsetWidth + gap;

    slider.style.transition = "transform 0.8s ease";

    function moveSlider() {

        if (paused) return;

        current++;

        slider.style.transform = `translateX(-${current * cardWidth}px)`;

        // Cuando termina el primer grupo de tarjetas
        if (current >= cards.length) {

            setTimeout(() => {

                slider.style.transition = "none";
                slider.style.transform = "translateX(0)";
                current = 0;

                // Fuerza el reflow
                slider.offsetHeight;

                slider.style.transition = "transform 0.8s ease";

            }, 800);

        }
    }

    setInterval(moveSlider, 4000);

    slider.addEventListener("mouseenter", () => {
        paused = true;
    });

    slider.addEventListener("mouseleave", () => {
        paused = false;
    });





/* ==========================
  prueba CARRUSEL 
========================== */

    document.addEventListener("DOMContentLoaded", () => {

    console.log("Carrusel iniciado");

    if (window.innerWidth <= 768) return;

    const slider = document.querySelector(".stories-container");

    console.log(slider);

    if (!slider) return;

    const cards = [...slider.children];

    console.log(cards.length);

    // resto del código...
});
});




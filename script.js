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

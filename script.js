document.addEventListener("DOMContentLoaded", () => {

const bienvenida = document.querySelector(".BienvenidaR");
const secciones = document.querySelectorAll(".inforsec > div");


/* PANTALLA DE BIENVENIDA*/

setTimeout(() => {

    bienvenida.classList.add("ocultar");

    setTimeout(() => {
        bienvenida.remove();
    }, 700);

}, 3200);


/*ANIMACIÓN DE LAS SECCIONES */

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.15
    }
);


secciones.forEach((seccion) => {
    observer.observe(seccion);
});


/*ANIMACIÓN INICIAL DE LA PRIMERA SECCIÓN*/

setTimeout(() => {

    const primera = document.querySelector(".inforsec > div");

    if (primera) {
        primera.classList.add("visible");
    }

}, 3300);
});

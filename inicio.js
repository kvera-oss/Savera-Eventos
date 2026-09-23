// JavaScript de la página de inicio de Savera

console.log("Savera Events está funcionando correctamente.");

const botonServicios = document.querySelector(".hero .btn");

if (botonServicios) {

    botonServicios.addEventListener("click", function () {

        console.log("El usuario quiere conocer nuestros servicios.");

    });

}
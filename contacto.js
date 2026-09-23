const formulario = document.getElementById("contact-form");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const evento = document.getElementById("evento").value;
    const mensaje = document.getElementById("mensaje").value;


    if (
        nombre === "" ||
        correo === "" ||
        evento === "" ||
        mensaje === ""
    ) {

        alert("Por favor, completa todos los campos.");

        return;
    }


    alert(
        "¡Gracias, " +
        nombre +
        "! Recibimos tu mensaje. Nos pondremos en contacto contigo próximamente."
    );


    formulario.reset();

});
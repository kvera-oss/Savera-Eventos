const servicios = [
    {
        numero: "SERVICIO 1",
        titulo: "Planeación de bodas",
        descripcion:
            "Diseñamos y organizamos cada detalle de tu boda para que disfrutes de un día especial, organizado y lleno de momentos inolvidables."
    },

    {
        numero: "SERVICIO 2",
        titulo: "Organización de eventos",
        descripcion:
            "Nos encargamos de la organización de eventos sociales y celebraciones, cuidando cada detalle para crear una experiencia única."
    },

    {
        numero: "SERVICIO 3",
        titulo: "Decoración",
        descripcion:
            "Creamos ambientes elegantes y personalizados de acuerdo con el estilo, los colores y la temática que imaginas para tu evento."
    },

    {
        numero: "SERVICIO 4",
        titulo: "Coordinación del evento",
        descripcion:
            "Coordinamos proveedores, horarios y actividades durante tu evento para que todo se desarrolle de manera organizada y tú puedas disfrutar."
    }
];


const contenedor = document.getElementById("services-container");


servicios.forEach(function(servicio) {

    const tarjeta = document.createElement("article");

    tarjeta.classList.add("service-card");

    tarjeta.innerHTML = `
        <div class="service-number">
            ${servicio.numero}
        </div>

        <h2>
            ${servicio.titulo}
        </h2>

        <p>
            ${servicio.descripcion}
        </p>

        <a href="contacto.html" class="btn">
            Solicitar información
        </a>
    `;

    contenedor.appendChild(tarjeta);

});
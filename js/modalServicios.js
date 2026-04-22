// modal-servicios.js

const servicios = {
    escaneo: {
        titulo: "Escaneo Computarizado",
        descripcion: "Realizamos un escaneo electrónico completo mediante equipos OBD2 para detectar fallas ocultas en el sistema del vehículo, optimizando su rendimiento y previniendo daños mayores.",
        imagen: "/img/escaneo.webp"
    },
    sensores: {
        titulo: "Diagnóstico de Sensores",
        descripcion: "Evaluamos sensores clave como oxígeno, temperatura, MAP y MAF, identificando fallas que afectan el consumo de combustible y el desempeño del motor.",
        imagen: "/img/sensores.webp"
    },
    electrico: {
        titulo: "Revisión del Sistema Eléctrico",
        descripcion: "Inspeccionamos todo el sistema eléctrico del vehículo, incluyendo batería, alternador y cableado, asegurando un funcionamiento estable y seguro.",
        imagen: "/img/electrico.webp"
    },
    ecu: {
        titulo: "Diagnóstico de ECU",
        descripcion: "Analizamos la unidad de control electrónico (ECU) para detectar errores, fallos de comunicación y problemas que afectan el rendimiento del vehículo.",
        imagen: "/img/ecu.webp"
    },
    codigos: {
        titulo: "Lectura y Borrado de Códigos",
        descripcion: "Leemos y eliminamos códigos de error almacenados en el sistema del vehículo, verificando que la falla haya sido corregida correctamente.",
        imagen: "/img/codigos.webp"
    },
    programacion: {
        titulo: "Programación Electrónica",
        descripcion: "Realizamos programación y reconfiguración de módulos electrónicos del vehículo, adaptando sistemas y optimizando su funcionamiento.",
        imagen: "/img/programacion.webp"
    }
};

window.mostrarModal = function (servicioId) {
    const servicio = servicios[servicioId];
    if (!servicio) return;

    document.getElementById('modal-titulo').textContent = servicio.titulo;
    document.getElementById('modal-descripcion').textContent = servicio.descripcion;

    const modalImg = document.getElementById('modal-imagen');
    modalImg.src = servicio.imagen;
    modalImg.alt = servicio.titulo;

    const modal = document.getElementById('modal');
    modal.setAttribute('aria-hidden', 'false');
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';


    const tituloModal = document.getElementById('modal-titulo');
    tituloModal.focus();
};

window.cerrarModal = function () {
    const modal = document.getElementById('modal');
    modal.setAttribute('aria-hidden', 'true');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
};

window.addEventListener('click', function (event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        cerrarModal();
    }
});

document.addEventListener('keydown', function (event) {
    const modal = document.getElementById('modal');
    if (event.key === 'Escape' && modal.style.display === 'flex') {
        cerrarModal();
    }
});
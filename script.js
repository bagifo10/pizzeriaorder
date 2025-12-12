// Esperar a que cargue todo el DOM
window.onload = function () {
  // Acceder al formulario y los inputs
  const formulario = document.getElementById("formulario");
  const Nombre = document.getElementById("Nombre");
  const Fecha = document.getElementById("Fecha");
  const Hora = document.getElementById("Hora");
  const Telefono = document.getElementById("Telefono");
  const Personas = document.getElementById("Personas");

  // Capturar el evento del submit
  formulario.addEventListener("submit", function (e) {
    e.preventDefault(); // Evitar que se recargue la página

    // Crear objeto reserva
    const nuevaReserva = {
      id: Date.now(), // ID único
      nombre: Nombre.value,
      fecha: Fecha.value,
      hora: Hora.value,
      telefono: Telefono.value,
      personas: Personas.value
    };

    // Obtener reservas existentes o crear array vacío
    let reservas = JSON.parse(localStorage.getItem("reservas")) || [];

    // Agregar la nueva reserva
    reservas.push(nuevaReserva);

    // Guardar de nuevo en localStorage
    localStorage.setItem("reservas", JSON.stringify(reservas));

    // Confirmación
    alert("¡Reserva enviada!");

    // Limpiar el formulario
    formulario.reset();
  });
}

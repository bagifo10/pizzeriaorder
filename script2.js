let reservas = JSON.parse(localStorage.getItem("reservas")) || [];

function renderReservas() {
    const tbody = document.querySelector("tbody");
    tbody.innerHTML = ""; // Limpiar tabla

    reservas.forEach((reserva, index) => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td><span class="texto">${reserva.nombre}</span><input class="input-edicion" type="text" value="${reserva.nombre}" id="nombre-${index}" style="display:none;"></td>
            <td><span class="texto">${reserva.fecha}</span><input class="input-edicion" type="date" value="${reserva.fecha}" id="fecha-${index}" style="display:none;"></td>
            <td><span class="texto">${reserva.hora}</span><input class="input-edicion" type="time" value="${reserva.hora}" id="hora-${index}" style="display:none;"></td>
            <td><span class="texto">${reserva.telefono}</span><input class="input-edicion" type="tel" value="${reserva.telefono}" id="tel-${index}" style="display:none;"></td>
            <td><span class="texto">${reserva.personas}</span><input class="input-edicion" type="number" min="1" max="8" value="${reserva.personas}" id="personas-${index}" style="display:none;"></td>
            <td>
                <button class="editar" onclick="toggleEditar(${index}, this)">Editar</button>
                <button class="cancelar" onclick="borrarReserva(${index})">Borrar</button>
            </td>
        `;

        tbody.appendChild(tr);
    });
}

function toggleEditar(index, btn) {
    const tr = btn.closest("tr");
    const inputs = tr.querySelectorAll(".input-edicion");
    const spans = tr.querySelectorAll(".texto");

    if (btn.textContent === "Editar") {
        // Pasar a modo edición
        inputs.forEach(input => input.style.display = "inline-block");
        spans.forEach(span => span.style.display = "none");
        btn.textContent = "Guardar";
    } else {
        // Guardar cambios
        const nombre = document.getElementById(`nombre-${index}`).value;
        const fecha = document.getElementById(`fecha-${index}`).value;
        const hora = document.getElementById(`hora-${index}`).value;
        const telefono = document.getElementById(`tel-${index}`).value;
        const personas = document.getElementById(`personas-${index}`).value;

        reservas[index] = { nombre, fecha, hora, telefono, personas };
        localStorage.setItem("reservas", JSON.stringify(reservas));
        renderReservas();
    }
}

function borrarReserva(index) {
    if (confirm("¿Seguro querés borrar esta reserva?")) {
        reservas.splice(index, 1);
        localStorage.setItem("reservas", JSON.stringify(reservas));
        renderReservas();
    }
}

// Cargar al inicio
renderReservas();

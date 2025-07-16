document.addEventListener('DOMContentLoaded', () => {
    const totalPagar = localStorage.getItem('montoTotalPago');
    const totalSpan = document.getElementById('total-pagar');

    if (totalPagar) {
        totalSpan.textContent = `S/. ${parseFloat(totalPagar).toFixed(2)}`;
    } else {
        totalSpan.textContent = 'S/. 0.00';
    }

    document.getElementById("form-pago").addEventListener("submit", function (e) {
        e.preventDefault();

        const nombre = document.querySelector('input[placeholder="Ingrese los datos"]').value.trim();
        const tarjeta = document.querySelector('input[placeholder="---- ---- ---- ----"]').value.trim();
        const fecha = document.querySelector('input[placeholder="MM/AA"]').value.trim();
        const cvv = document.querySelector('input[placeholder="Código de seguridad"]').value.trim();

        if (!nombre || !tarjeta || !fecha || !cvv) {
            alert("Por favor completa todos los campos de pago.");
            return;
        }

        // Mensaje de éxito
        alert("¡Pago realizado con éxito!");

        // Limpiar carrito
        localStorage.removeItem("carritoMundoColeccionable");
        localStorage.removeItem("montoTotalPago");

        // Redirigir a principal después de pago
        window.location.href = "Principal.html";
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const totalPagar = localStorage.getItem('montoTotalPago');
    const totalSpan = document.getElementById('total-resumen');

    if (totalPagar) {
        totalSpan.textContent = `Total a pagar: S/. ${parseFloat(totalPagar).toFixed(2)}`;
    } else {
        totalSpan.textContent = 'Total a pagar: S/. 0.00';
    }

    const formPago = document.getElementById("form-pago");
    const modal = document.getElementById('modal-exito');
    const cerrarModal = document.getElementById('cerrar-modal');

    formPago.addEventListener("submit", function (e) {
        e.preventDefault();

        const nombre = document.getElementById('nombre').value.trim();
        const tarjeta = document.getElementById('numero-tarjeta').value.trim();
        const fecha = document.getElementById('fecha-exp').value.trim();
        const cvv = document.getElementById('cvv').value.trim();

        if (!nombre || !tarjeta || !fecha || !cvv) {
            alert("Por favor completa todos los campos de pago.");
            return;
        }

        // Mostrar modal de éxito
        modal.style.display = 'flex';

        // Limpiar carrito
        localStorage.removeItem("carritoMundoColeccionable");
        localStorage.removeItem("montoTotalPago");
    });

    cerrarModal.addEventListener('click', () => {
        modal.style.display = 'none';
        window.location.href = "Principal.html";
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            window.location.href = "Principal.html";
        }
    });
});
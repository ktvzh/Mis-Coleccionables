document.addEventListener('DOMContentLoaded', () => {
    const metodoRadios = document.querySelectorAll('input[name="metodo"]');
    const formDelivery = document.getElementById('form-delivery');
    const formTienda = document.getElementById('form-tienda');
    const envioCosto = document.getElementById('envio-costo');
    const totalCarrito = document.getElementById('total-carrito');
    const totalFinal = document.getElementById('total-final');
    const formEnvio = document.getElementById('form-envio');

    const carritoKey = "carritoMundoColeccionable";
    let totalCompra = 0;

    const carrito = JSON.parse(localStorage.getItem(carritoKey)) || [];
    carrito.forEach(item => {
        if (item.activo !== false) {
            totalCompra += item.precio * (item.cantidad || 1);
        }
    });
    totalCarrito.textContent = `S/. ${totalCompra.toFixed(2)}`;

    const actualizarTotales = () => {
        const metodoSeleccionado = document.querySelector('input[name="metodo"]:checked').value;
        let costoEnvio = metodoSeleccionado === 'delivery' ? 50 : 0;
        envioCosto.textContent = `S/. ${costoEnvio.toFixed(2)}`;
        const totalPagar = totalCompra + costoEnvio;
        totalFinal.textContent = `S/. ${totalPagar.toFixed(2)}`;
        return totalPagar;
    };

    actualizarTotales();

    metodoRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            if (radio.value === 'delivery') {
                formDelivery.style.display = 'block';
                formTienda.style.display = 'none';
            } else {
                formDelivery.style.display = 'none';
                formTienda.style.display = 'block';
            }
            actualizarTotales();
        });
    });

    formEnvio.addEventListener('submit', (e) => {
        e.preventDefault();

        const metodoSeleccionado = document.querySelector('input[name="metodo"]:checked').value;
        if (metodoSeleccionado === 'delivery') {
            const campos = formDelivery.querySelectorAll('input[required]');
            for (let campo of campos) {
                if (!campo.value.trim()) {
                    alert('Por favor completa todos los campos de envío a domicilio.');
                    return;
                }
            }
        } else {
            const tiendaSelect = formTienda.querySelector('select[name="tienda"]');
            if (!tiendaSelect.value) {
                alert('Por favor selecciona la tienda de recojo.');
                return;
            }
        }

        // ✅ Guardar monto como número sin formato
        const totalPagar = actualizarTotales();
        localStorage.setItem('montoTotalPago', totalPagar);

        // ✅ Redirigir a pago.html
        window.location.href = "pago.html";
    });
});

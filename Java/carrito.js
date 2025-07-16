document.addEventListener("DOMContentLoaded", function () {
    const carritoKey = "carritoMundoColeccionable";

    function obtenerCarrito() {
        let carrito = JSON.parse(localStorage.getItem(carritoKey)) || [];
        carrito = carrito.map(item => ({
            ...item,
            cantidad: item.cantidad ?? 1,
            activo: item.activo ?? true
        }));
        guardarCarrito(carrito);
        return carrito;
    }

    function guardarCarrito(carrito) {
        localStorage.setItem(carritoKey, JSON.stringify(carrito));
    }

    function actualizarContador() {
        const carrito = obtenerCarrito();
        const contador = document.getElementById("contador-carrito");
        if (contador) {
            let cantidadTotal = carrito.reduce((acc, item) => acc + item.cantidad, 0);
            contador.textContent = cantidadTotal;
        }
    }

    function agregarProductoDesdeURL() {
        const params = new URLSearchParams(window.location.search);
        const producto = params.get("producto");
        const precio = params.get("precio");

        if (producto && precio) {
            const carrito = obtenerCarrito();
            const index = carrito.findIndex(item => item.nombre === producto);

            if (index !== -1) {
                carrito[index].cantidad += 1;
            } else {
                carrito.push({
                    nombre: producto,
                    precio: parseFloat(precio),
                    cantidad: 1,
                    activo: true
                });
            }

            guardarCarrito(carrito);
            actualizarContador();
            history.replaceState(null, "", window.location.pathname);
        }
    }

    function renderizarCarrito() {
        const carrito = obtenerCarrito();
        const carritoBody = document.getElementById("carrito-body");
        const carritoVacio = document.getElementById("carrito-vacio");
        const resumenCompra = document.getElementById("resumen-compra");
        const totalElemento = document.getElementById("total");

        if (!carritoBody) return;

        carritoBody.innerHTML = "";
        let total = 0;

        carrito.forEach((item, index) => {
            const fila = document.createElement("tr");

            const celdaNombre = document.createElement("td");
            celdaNombre.textContent = item.nombre;

            const celdaPrecio = document.createElement("td");
            celdaPrecio.textContent = `S/. ${item.precio.toFixed(2)}`;

            const celdaCantidad = document.createElement("td");
            const btnMenos = document.createElement("button");
            btnMenos.textContent = "−";
            btnMenos.classList.add("btn-eliminar");
            btnMenos.style.backgroundColor = "#222";
            btnMenos.addEventListener("click", () => {
                item.cantidad = Math.max(1, item.cantidad - 1);
                guardarCarrito(carrito);
                actualizarContador();
                renderizarCarrito();
            });

            const cantidadSpan = document.createElement("span");
            cantidadSpan.textContent = ` ${item.cantidad} `;

            const btnMas = document.createElement("button");
            btnMas.textContent = "+";
            btnMas.classList.add("btn-eliminar");
            btnMas.style.backgroundColor = "#222";
            btnMas.addEventListener("click", () => {
                item.cantidad += 1;
                guardarCarrito(carrito);
                actualizarContador();
                renderizarCarrito();
            });

            celdaCantidad.append(btnMenos, cantidadSpan, btnMas);

            const celdaToggle = document.createElement("td");
            const toggleBtn = document.createElement("button");
            toggleBtn.classList.add("btn-activo");
            if (!item.activo) toggleBtn.classList.add("inactivo");
            toggleBtn.innerHTML = item.activo ? "☑️" : "⬜";
            toggleBtn.addEventListener("click", () => {
                item.activo = !item.activo;
                guardarCarrito(carrito);
                renderizarCarrito();
            });
            celdaToggle.appendChild(toggleBtn);

            const celdaAccion = document.createElement("td");
            const btnEliminar = document.createElement("button");
            btnEliminar.textContent = "Eliminar";
            btnEliminar.classList.add("btn-eliminar");
            btnEliminar.addEventListener("click", () => {
                eliminarProducto(index);
            });
            celdaAccion.appendChild(btnEliminar);

            fila.append(celdaNombre, celdaPrecio, celdaCantidad, celdaToggle, celdaAccion);
            carritoBody.appendChild(fila);

            if (item.activo) {
                total += item.precio * item.cantidad;
            }
        });

        if (carrito.length === 0) {
            carritoVacio.style.display = "block";
            resumenCompra.style.display = "none";
        } else {
            carritoVacio.style.display = "none";
            resumenCompra.style.display = "block";
            totalElemento.textContent = `Total: S/. ${total.toFixed(2)}`;
        }
    }

    function eliminarProducto(index) {
        const carrito = obtenerCarrito();
        carrito.splice(index, 1);
        guardarCarrito(carrito);
        actualizarContador();
        renderizarCarrito();
    }

    actualizarContador();
    agregarProductoDesdeURL();
    renderizarCarrito();
});

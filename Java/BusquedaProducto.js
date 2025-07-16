/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


  document.addEventListener('DOMContentLoaded', function () {
    const searchForm = document.querySelector('.search-form');
    const searchInput = document.getElementById('search-input');

    searchForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const query = searchInput.value.trim().toLowerCase();
      if (query.length === 0) return;

      // Buscar el primer producto que comience con esa letra
      const productos = document.querySelectorAll('.producto');
      let encontrado = false;

      productos.forEach(producto => {
        const nombre = producto.dataset.nombre?.toLowerCase();
        if (!encontrado && nombre && nombre.startsWith(query)) {
          producto.scrollIntoView({ behavior: 'smooth', block: 'start' });
          producto.style.boxShadow = "0 0 15px 3px #ffcc00"; // resaltado temporal
          setTimeout(() => producto.style.boxShadow = "", 2000);
          encontrado = true;
        }
      });

      if (!encontrado) {
        alert("No se encontró ningún producto que empiece con: " + query);
      }
    });
  });

document.addEventListener('DOMContentLoaded', function () {
  // Obtener la palabra de búsqueda desde la URL
  const params = new URLSearchParams(window.location.search);
  const query = params.get('buscar');

  if (query) {
    const productos = document.querySelectorAll('.producto');
    const palabra = query.toLowerCase().trim();
    let encontrado = false;

    productos.forEach(producto => {
      const nombre = producto.dataset.nombre?.toLowerCase();
      if (!encontrado && nombre && nombre.includes(palabra)) {
        producto.scrollIntoView({ behavior: 'smooth', block: 'start' });
        producto.style.boxShadow = "0 0 15px 4px #ffa500";
        setTimeout(() => producto.style.boxShadow = "", 2000);
        encontrado = true;
      }
    });

    if (!encontrado) {
      alert("No se encontró ningún producto que coincida con: " + query);
    }
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const params = new URLSearchParams(window.location.search);
  const query = params.get('buscar');

  if (query) {
    const palabra = query.toLowerCase().trim();
    const productos = document.querySelectorAll('.producto');
    let primeroVisible = null;
    let hayCoincidencias = false;

    productos.forEach(producto => {
      const nombre = producto.dataset.nombre?.toLowerCase();

      if (nombre && nombre.includes(palabra)) {
        producto.style.boxShadow = "0 0 15px 4px #ffa500";
        hayCoincidencias = true;

        if (!primeroVisible) {
          primeroVisible = producto;
        }

        setTimeout(() => {
          producto.style.boxShadow = "";
        }, 3000);
      }
    });

    if (hayCoincidencias && primeroVisible) {
      primeroVisible.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      alert("No se encontró ningún producto que coincida con: " + query);
    }
  }
});




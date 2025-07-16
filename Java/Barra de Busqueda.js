/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

document.addEventListener('DOMContentLoaded', () => {
  const searchForm = document.querySelector('.search-form');
  const searchInput = document.getElementById('search-input');
  const searchResults = document.querySelector('.search-results');

  const products = [
    { id: 1, name: "Rocola Clásica 1960", category: "Rocolas", description: "Rocola original de los años 60, perfecto estado" },
    { id: 2, name: "Máquina Arcade Pac-Man", category: "Arcades", description: "Edición especial 1980, completamente restaurada" },
    { id: 3, name: "Pinball El Señor de los Anillos", category: "Pinballs", description: "Edición limitada 2003, excelentes condiciones" },
    { id: 4, name: "Cómic Amazing Fantasy #15", category: "Cómics", description: "Primera aparición de Spider-Man, 1962" },
    { id: 5, name: "Firma Autógrafa de The Beatles", category: "Firmas", description: "Certificado de autenticidad incluido" },
    { id: 6, name: "Manga Akira Vol. 1", category: "Mangas", description: "Edición original japonesa, 1982" }
  ];

  let debounceTimeout = null;

  const performSearch = (query) => {
    if (query.length < 2) {
      searchResults.style.display = 'none';
      return;
    }

    const filtered = products.filter(item =>
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase())
    );

    displayResults(filtered);
  };

  const displayResults = (results) => {
    searchResults.innerHTML = '';

    if (results.length === 0) {
      searchResults.innerHTML = '<div class="no-results">No se encontraron productos</div>';
    } else {
      results.forEach(product => {
        const item = document.createElement('div');
        item.className = 'search-result-item';
        item.innerHTML = `
          <h4>${product.name}</h4>
          <p><strong>Categoría:</strong> ${product.category}</p>
          <p>${product.description}</p>
        `;
        item.addEventListener('click', () => {
          window.location.href = `producto.html?id=${product.id}`;
        });
        searchResults.appendChild(item);
      });
    }

    searchResults.style.display = 'block';
  };

  searchInput.addEventListener('input', () => {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
      performSearch(searchInput.value.trim());
    }, 200); // 200ms debounce
  });

  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    performSearch(searchInput.value.trim());
  });

  document.addEventListener('click', (e) => {
    if (!searchForm.contains(e.target) && !searchResults.contains(e.target)) {
      searchResults.style.display = 'none';
    }
  });

  searchInput.addEventListener('focus', () => {
    if (searchInput.value.trim().length >= 2) {
      searchResults.style.display = 'block';
    }
  });
});


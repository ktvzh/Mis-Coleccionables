/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

document.addEventListener('DOMContentLoaded', function() {
  // ========== ACORDEÓN ==========
  const coverageItems = document.querySelectorAll('.coverage-item');
  
  coverageItems.forEach(item => {
    const header = item.querySelector('.coverage-header');
    const content = item.querySelector('.coverage-content');
    const icon = header.querySelector('i.fa-chevron-down');
    
    header.addEventListener('click', () => {
      // Cerrar otros items primero
      coverageItems.forEach(otherItem => {
        if (otherItem !== item) {
          const otherContent = otherItem.querySelector('.coverage-content');
          const otherIcon = otherItem.querySelector('i.fa-chevron-down');
          otherContent.classList.remove('show');
          if (otherIcon) {
            otherIcon.classList.replace('fa-chevron-up', 'fa-chevron-down');
          }
        }
      });
      
      // Alternar el item actual
      content.classList.toggle('show');
      
      // Rotar el ícono
      if (icon) {
        if (content.classList.contains('show')) {
          icon.classList.replace('fa-chevron-down', 'fa-chevron-up');
        } else {
          icon.classList.replace('fa-chevron-up', 'fa-chevron-down');
        }
      }
    });
  });

  // ========== CALCULADORA ==========
  const calculateBtn = document.getElementById('calculate-btn');
  
  calculateBtn.addEventListener('click', function() {
    const productType = document.getElementById('product-type').value;
    const purchaseDate = document.getElementById('purchase-date').value;
    const resultDiv = document.getElementById('warranty-result');
    const resultText = document.getElementById('result-text');
    
    if (!productType || !purchaseDate) {
      alert('Por favor completa todos los campos');
      return;
    }
    
    const purchase = new Date(purchaseDate);
    const today = new Date();
    
    // Calcular diferencia en días
    const timeDiff = today.getTime() - purchase.getTime();
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    
    // Configurar garantías según tipo de producto
    let warrantyDays, productName;
    
    switch(productType) {
      case 'rocola':
        warrantyDays = 365; // 12 meses
        productName = 'rocola/máquina arcade';
        break;
      case 'pinball':
        warrantyDays = 548; // 18 meses (~1.5 años)
        productName = 'máquina pinball';
        break;
      case 'cartas':
        warrantyDays = 30;
        productName = 'cartas/firmas autografiadas';
        break;
      case 'comics':
        warrantyDays = 60;
        productName = 'cómics/mangas';
        break;
      default:
        warrantyDays = 0;
        productName = 'producto';
    }
    
    const remainingDays = warrantyDays - daysDiff;
    
    // Mostrar resultado
    if (remainingDays <= 0) {
      resultText.innerHTML = `Tu ${productName} ya no está cubierto por la garantía estándar de ${warrantyDays} días.`;
    } else {
      resultText.innerHTML = `A tu ${productName} le quedan <strong>${remainingDays} días</strong> de garantía (de ${warrantyDays} días totales).`;
    }
    
    resultDiv.style.display = 'block';
  });
});

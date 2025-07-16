/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

document.addEventListener('DOMContentLoaded', function() {
  // Obtener elementos del modal
  const modal = document.getElementById('successModal');
  const closeModal = document.querySelector('.close-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  
  // Función para mostrar el modal
  function showModal() {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Evitar scroll
  }
  
  // Función para ocultar el modal
  function hideModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restaurar scroll
  }
  
  // Eventos para cerrar el modal
  closeModal.addEventListener('click', hideModal);
  modalCloseBtn.addEventListener('click', hideModal);
  
  // Cerrar al hacer clic fuera del modal
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      hideModal();
    }
  });
  
  // Manejar el envío del formulario
  document.getElementById('support-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Validar el checkbox de privacidad
    const privacyCheck = document.getElementById('privacy');
    if (!privacyCheck.checked) {
      alert('Debes aceptar nuestra Política de Privacidad para continuar');
      return;
    }
    
    // Simular envío del formulario (en producción sería una petición AJAX)
    console.log('Formulario enviado:', {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      subject: document.getElementById('subject').value,
      message: document.getElementById('message').value
    });
    
    // Mostrar el modal de éxito
    showModal();
    
    // Limpiar el formulario
    this.reset();
  });
});
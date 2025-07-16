/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


document.addEventListener('DOMContentLoaded', () => {
    // Declaración de Variables y Constantes 
    const ARTICLE_TITLE = "Coleccionando Cintas VHS";
    let favoriteVhs = ""; // Valor inicial vacío.

    // Referencias a elementos de la interfaz interactiva
    const vhsInput = document.getElementById('vhsInput');       
    const vhsSubmitBtn = document.getElementById('vhsSubmitBtn'); 
    const vhsOutput = document.getElementById('vhsOutput');     

    // Interactividad con el Usuario 
    if (vhsSubmitBtn && vhsInput && vhsOutput) {
        vhsSubmitBtn.addEventListener('click', () => {
            const inputMovie = vhsInput.value.trim(); 
            if (inputMovie !== "") { 
                favoriteVhs = inputMovie; 
                vhsOutput.textContent = `¡Excelente elección! Tu VHS favorito es: "${favoriteVhs}". ¡Qué joya!`;
                vhsInput.value = ''; 
            } else { 
                vhsOutput.textContent = "Por favor, escribe el nombre de tu película VHS favorita.";
            }
        });
    }


    //  Menú Responsivo 
    const menuToggle = document.getElementById('menuToggle');
    const navList = document.getElementById('navList');
    if (menuToggle && navList) {
        menuToggle.addEventListener('click', () => {
            navList.classList.toggle('active');
        });
    }
});
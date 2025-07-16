/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
document.addEventListener('DOMContentLoaded', () => {
    const COMIC_ERA = "los 90";

  //Manipulación del DOM

    // Referencias a elementos de la interfaz interactiva
    const btnSi = document.getElementById('btnSi');       
    const btnNo = document.getElementById('btnNo');        
    const comicOutput = document.getElementById('comicOutput'); 

    // Interactividad con el Usuario 
    if (btnSi && btnNo && comicOutput) {
        btnSi.addEventListener('click', () => {
            comicOutput.textContent = `¡Felicidades! Eres un afortunado coleccionista de ${COMIC_ERA}. ¡Qué envidia!`;
       
        });

        btnNo.addEventListener('click', () => {
            comicOutput.textContent = `¡No te preocupes! Siempre hay tiempo para empezar tu colección de cómics de ${COMIC_ERA}.`;
        });
    }

    // Menú Responsivo
    const menuToggle = document.getElementById('menuToggle');
    const navList = document.getElementById('navList');
    if (menuToggle && navList) {
        menuToggle.addEventListener('click', () => {
            navList.classList.toggle('active');
        });
    }
});
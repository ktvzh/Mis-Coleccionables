/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
document.addEventListener('DOMContentLoaded', () => {
    //  Declaración de Variables y Constantes 
    const ARTICLE_NAME = "Máquina Arcade";
    const herramientasBasicas = [
        "Destornilladores",
        "Limpiador electrónico",
        "Soldador",
        "Pintura en spray",
        "Lijas"
    ];

    // Manipulación del DOM 
    const listaHerramientasUL = document.getElementById('listaHerramientas');
    if (listaHerramientasUL) {
        herramientasBasicas.forEach(herramienta => {
            const li = document.createElement('li');
            li.textContent = herramienta;           
            listaHerramientasUL.appendChild(li);     
        });
    }

    // Interactividad con el Usuario 
    const desafioInput = document.getElementById('desafioInput'); 
    const desafioBtn = document.getElementById('desafioBtn');    
    const outputMensaje = document.getElementById('outputMensaje'); 

    if (desafioBtn && desafioInput && outputMensaje) {
        desafioBtn.addEventListener('click', () => {
            const pasoDesafiante = desafioInput.value.trim(); 
            if (pasoDesafiante !== "") {
                outputMensaje.textContent = `¡Entendido! Te enfocarás en "${pasoDesafiante}". ¡Con práctica, lo dominarás!`;
                desafioInput.value = ''; 
            } else {
                outputMensaje.textContent = "Por favor, escribe un paso antes de enviar.";
            }
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
;